# SoloBnB

### [Visit the live site](https://solobnb.herokuapp.com/#/)

SoloBnB is a single-page, full-stack web application modeled after Airbnb and geared toward solo travelers. It uses Ruby on Rails with a PostgresSQL database on the back-end, and React.js and Redux on the front-end. For image hosting, it utilizes Amazon Web Services. For live messaging, it uses Action Cable to integrate WebSockets with the rest of the Rails application.

![](app/assets/images/readme/solobnb-demo.gif)

## Why solo travel?

It started entirely by accident. I was 14 years old, and like most 14-year-olds, I was restless. I had a mind full of grand visions and an undeterred spirit that had not yet known the crushing bite of failure. All I knew was that I had spent my entire life in New York and I wanted to see things I had never seen before, like stars peppering the night sky and vast expanses of desolate nature where not a single skyscraper dominated the landscape. 

So I applied for a study abroad grant from my high school and I spent my summer learning Latin in a small village in Italy, practicing French in Paris, and honing my writing skills at Oxford University. But at the end, it wasn't the hours of practicing conjugations in dusty attics that stuck with me but rather the wild Vespa rides across the Italian countryside, the opulence of Versailles, and the lazy afternoons punting on the river Cherwell that stayed forever ingrained in my memory. 

For the first time in my life, I saw the stars. And I knew, in that moment, that I never wanted to stop chasing them.

Years — and dozens of countries — later, much has remained the same. And while there is nothing sweeter than sharing a vacation with friends or family, I still believe that there is something about solo travel that changes you fundamentally. Would I be the same person today if I hadn’t plunged myself into the icy dark sea and slept on the beach with strangers who would go on to become some of my closest friends, or wept alone for six hours straight on the flight home from Chile, or climbed into a magnificent glowworm cave in Australia at the dead of night, or recovered from dengue fever in a hospital room all by myself in the Philippines? Those moments of unmeasurable joy and pain — moments that felt like years — remind me today of all that I am capable of.

And so, SoloBnB is not just a travel booking application. It's also an ode to the life-changing experiences we have when we're on the road by ourselves.

## Technologies

* React / Redux
* Ruby on Rails
* PostgreSQL
* Javascript
* CSS
* Webpack
* Amazon Web Services
* Google Maps API
* Action Cable

## Key features
#### [SoloBnB Design Documents](https://github.com/nian-hu/solobnb/wiki)

#### User Authentication
* Users can sign up or log in with an existing account.
* Invalid login or signup attempts would trigger both front-end and back-end errors.

![](app/assets/images/readme/solobnb-user-auth.gif)

* Logged in users can access features such as making reservations, accessing host profiles, and messaging hosts.
* Only logged out users can view the splash page. Logged in users are redirected to the listing index page.

```
class User < ApplicationRecord
  validates :password_digest, :fname, :lname, presence: true
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

  attr_reader :password
  after_initialize :ensure_session_token
 
  // ...
  
  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.is_password?(password)
    nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

end
```

#### Listings + Search
* Listings are shown according to the position of the map. As users zoom out and move around, more listings are displayed.

```
class Listing < ApplicationRecord
  //...

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("long > ?", bounds[:southWest][:lng])
        .where("long < ?", bounds[:northEast][:lng])
  end
  
  //...
end
```

* Users are able to search for listings with Google Maps Places API, namely the Autocomplete widget.
* Users can filter listings based on availability by selecting a date range on the splash page. Unavailable listings will not be displayed.

```
class ListingMap extends React.Component {
  constructor(props) {
    super(props);
    this.searchParams = new URLSearchParams(`${this.props.history.location.hash}`);
    const lat = parseFloat(this.searchParams.get('lat')) || 40.716880; 
    const long = parseFloat(this.searchParams.get('long')) || -73.948810;
    const startDate = this.searchParams.get('checkin') || null;
    const endDate = this.searchParams.get('checkout') || null;
    this.center = {
      lat: lat,
      lng: long
    }
    this.mapOptions = {
      center: this.center,
      zoom: 8
    }
    this.dates = {
      startDate: startDate,
      endDate: endDate
    }
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.mapNode, this.mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.listings);
  }
  
 //...

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const directions = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: directions.north, lng: directions.east },
        southWest: { lat: directions.south, lng: directions.west }
      }
      
      this.props.updateFilter({
        "bounds": bounds,
        "dates": this.dates
      })
    })
  }
  
  //...
}
```
* Every listing comes with a short text description, location information, a section for amenities with modal functionality to view more, host information, availability information, reviews, and a map displaying the neighborhood.

#### Bookings
* Users are able to book listings for a given date range. If the listing is unavailable during those dates, users will not be permitted to select those dates.


```
class Listing < ApplicationRecord
  //...

  def self.available_in_bounds(bounds, dates)
    overlap = Booking.select('listing_id')
                     .where('? BETWEEN start_date AND end_date
                            OR ? BETWEEN start_date AND end_date',
                            dates[:startDate], dates[:endDate])

    too_long = Booking.select('listing_id')
                       .where('? < start_date AND ? > end_date',
                              Date.parse(dates[:startDate]), Date.parse(dates[:endDate]))
    self.in_bounds(bounds).where.not(id: overlap).where.not(id: too_long)
  end
end
```

* Users are able to access their own bookings under the "Trips" section of the navigational bar dropdown.
* Users are only able to cancel bookings if the start date has not yet occurred.
* Users are only able to write reviews for bookings if the end date has already passed.

```
class BookingIndexItem extends React.Component {
    // ...
    
    render() {
      const cancelButton = moment(booking.start_date).isAfter(moment(), 'day') ? (
        <button onClick={() => this.cancelBooking(booking.id)} className='cancel-booking-button'>
          Cancel Booking
            </button>
      ) : (
          null
        )

      const reviewButton = moment(booking.end_date).isBefore(moment(), 'day') ? (
        <button onClick={() => dispatch(openReviewModal('create-review', booking.listing.id))} className='review-button'>
          Write Review
        </button>
      ) : (
        null
      )

    // ...
  }
}
```

### Reviews
* Users are able to write reviews for past bookings and also provide ratings in the form of stars, from one to five.
* Users are able to rate bookings across six categories — accuracy, communication, cleanliness, location, check-in, and value.
* Listings display an overall average rating that is recalculated every time a new rating is submitted.
* Listings also display an average rating for each of the six categories. Each category rating is also recalculated every time a new rating is submitted.

```
class ReviewIndex extends React.Component {
  //...
  
  findAvgRating() {
    const { reviews } = this.props;
    const ratings = { 
      accuracy: 0, 
      communication: 0,
      cleanliness: 0,
      location: 0,
      check_in: 0,
      value: 0
    }

    for (let i = 0; i < reviews.length; i++) {
      let review = reviews[i];
      
      for (let key in ratings) {
        ratings[key] += review[key]
      }
    }

    for (let key in ratings) {
      ratings[key] = (ratings[key] / reviews.length)
    }

    return ratings;
  }
  
  //...
}
```

#### User Profiles + Messaging
* Users are able to access their own profile under the "Profile" section of the navigational bar dropdown.
* Users can visit a host's profile by clicking on the host's name on the listing page.
* Profiles display a short text description as well as the user's listings. If the user has no listings, it will say that the user has no listings at this time.
* Users are able to send live messages to each other with a button accessible on every user's profile page.
```
class ChatChannel < ApplicationCable::Channel
  def subscribed 
    @chat_channel = Channel.first
    stream_for @chat_channel
  end

  def speak(data)
    message_data = data["message"]
    @message = @chat_channel.messages.new(body: message_data['body'])
    @message.author_id = current_user.id
    @message.channel_id = @chat_channel.id
    if @message.save 
      socket = { message: @message, type: "message" }
      ChatChannel.broadcast_to(@chat_channel, socket)
    end
  end 

  def load 
    messages = Message.all.collect(&:body)
    socket = { messages: messages, type: "messages" }
    ChatChannel.broadcast_to(@chat_channel, socket)
  end
end
```


```
class ChatRoom extends React.Component {
  //...

  componentDidMount() {
    App.cable.subscriptions.create(
      { channel: 'ChatChannel' }, 
      {
        received: data => {
          if (!this.props.users[data.message.author_id]) {
            this.props.fetchUser(data.message.author_id).then(() => this.props.receiveMessage(data.message))
          } else {
            this.props.receiveMessage(data.message)
          }
        },
        speak: function(data) {
          return this.perform('speak', data)
        }
      }
    )
    this.props.fetchMessages(1);
  }
  
  //...
}
```
