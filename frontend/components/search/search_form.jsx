import React from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import { fetchListings } from '../../util/listing_api_util';
import { withRouter } from 'react-router-dom';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      lat: null,
      long: null,
      startDate: null,
      endDate: null,
      focused1: false,
      focused2: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setNewLocation = this.setNewLocation.bind(this);

    this.defaultAddress = '84 Withers St. Brooklyn, NY 11211';
    // this.defaultCenter = { lat: 38.747360, lng: -9.164060 }
    // this.defaultZoom = 2
  }

  // componentDidMount() {
  //   this.startAutocomplete();
  // }

  // startAutocomplete() {
  //   const input = document.getElementById('location-input')
  //   // debugger
  //   this.autocomplete = new google.maps.places.Autocomplete(input)
  //   // const options = {
  //   //   types: ['(cities)']
  //   // }
  //   // this.autocomplete = new google.maps.places.Autocomplete(input, options)
  //   // this.autocomplete.getBounds()
  // }

  componentDidMount() {
    const input = document.getElementById('location-input');
    this.autocomplete = new google.maps.places.Autocomplete(input);
    this.autocomplete.addListener('place_changed', this.setNewLocation);
  }

  setNewLocation() {
    const place = this.autocomplete.getPlace()
    this.setState({
      address: place.formatted_address,
      lat: place.geometry.location.lat(),
      long: place.geometry.location.lng()
    })
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    // const address = document.getElementById('location-input').value || this.defaultAddress;
    // const place = address.getPlace();
    // // debugger
    // // will it work?
    // const formattedAddress = place.formatted_address
    // const lat = place.geometry.location.lat()
    // const long = place.geometry.location.lng()
    
    // this.setState({
    //   address: place.formatted_address,
    //   lat: place.geometry.location.lat(),
    //   long: place.geometry.location.lng()
    // })

    // include default lat/long for williamsburg
    const lat = this.state.lat || 40.716880;
    const long = this.state.long || -73.948810;

    let startDate;
    let endDate;

    if (this.state.startDate === null) {
      startDate = null;
    } else {
      startDate = moment(this.state.startDate).format("YYYY/MM/DD");
    }
    
    if (this.state.endDate === null) {
      endDate = null;
    } else {
      endDate = moment(this.state.endDate).format("YYYY/MM/DD");
    }

    // debugger
    
    const hash = `&lat=${lat}&long=${long}&checkin=${startDate}&checkout=${endDate}`

    // redirect to listings page
    this.props.history.push({
      pathname: '/listings',
      hash: hash
    })

    // if (this.state.location) {
    //   const geocoder = new google.maps.Geocoder();
    //   const address = document.getElementById('location-input').value || this.defaultAddress;
    //   geocoder.geocode(
    //     {'address': address},
    //     (resultArr, status) => {
    //       if (status === 'OK') {
    //         const address = resultArr[0].formatted_address;
    //         const lat = resultArr[0].geometry.location.lat;
    //         const long = resultArr[0].geometry.location.lng;
    //       }
    //     }
    //   )
    // }

      // get the lat and long and then setCenter of map
  // const map options

    
  }


  // setNewLocation() {
  //   const place = this.locationFinder.getPlace()
  //   this.setState({
  //     address: place.formatted_address,
  //     lat: place.geometry.location.lat(),
  //     lng: place.geometry.location.lng()
  //   })
  // }



    ////// notes
    // const directions = this.map.getBounds().toJSON();
    //   // returns latlng bounds

    // const bounds = {
    //   northEast: { lat: directions.north, lng: directions.east },
    //   southWest: { lat: directions.south, lng: directions.west }
    // }

    // updateFilter(filter, value)
    // updateFilter("bounds", bounds)

    // fetchListings(bounds)
  

  render() {
    return (
      <div className='search-form-container'>
        <div className='welcome-message-container'>
          <h1 className='main-welcome-message'>
            Traveling alone doesn't have to suck.
          </h1>
          <h2 className='sub-welcome-message'>
            Find a place to stay that's perfectly crafted for one.
          </h2>
        </div>

        <form className='search-form'>
          <div className='location-search-container'>
            <label>WHERE</label>
            <input
              id='location-input'
              type="text"
              placeholder="Anywhere"
              // value="n"
              onChange={this.handleChange('address')}
            />
          </div>

          <div className='date-picker-container'>
            <div className='start-date-picker'>
              <label>CHECK-IN</label>
              <SingleDatePicker
                date={this.state.startDate} // momentPropTypes.momentObj or null
                onDateChange={startDate => this.setState({ startDate })} // PropTypes.func.isRequired
                focused={this.state.focused1} // PropTypes.bool
                onFocusChange={({ focused: focused1 }) => this.setState({ focused1 })} // PropTypes.func.isRequired
                id="start-date" // PropTypes.string.isRequired,
                numberOfMonths={1}
                placeholder={'mm/dd/yyyy'}
                readOnly={true}
              />
            </div>

            <div className='end-date-picker'>
              <label>CHECKOUT</label>
              <SingleDatePicker
                date={this.state.endDate} // momentPropTypes.momentObj or null
                onDateChange={endDate => this.setState({ endDate })} // PropTypes.func.isRequired
                focused={this.state.focused2} // PropTypes.bool
                onFocusChange={({ focused: focused2 }) => this.setState({ focused2 })} // PropTypes.func.isRequired
                id="end-date" // PropTypes.string.isRequired,
                numberOfMonths={1}
                placeholder={'mm/dd/yyyy'}
                readOnly={true}
              />
            </div>
          </div>

          <button className='search-form-submit' onClick={this.handleSubmit}>
            Search
          </button>

        </form>
      </div>
    )
  }
}

export default withRouter(SearchForm);