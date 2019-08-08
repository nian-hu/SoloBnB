import React from 'react';
import ReviewIndexItem from './review_index_item';
import { withRouter } from 'react-router-dom';

class ReviewIndex extends React.Component {
  // listing is being passed down as prop
  // unclear if I need it yet

  componentDidMount() {
    this.props.fetchReviews(this.props.match.params.listingId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.listingId !== this.props.match.params.listingId) {
      this.props.fetchReviews(this.props.match.params.listingId);
    }
  }

  renderStars(num) {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < num) {
        stars.push(<i key={i} className="fas fa-star"></i>)
      } else {
        stars.push(<i key={i} className="far fa-star"></i>)
      }
    }

    return stars;
  }

  
  // let reviews = [
  //   {id: 1, accuracy: 5, communication: 5, cleanliness: 5, location: 5, check_in: 5, value: 5},
  //   {id: 2, accuracy: 1, communication: 1, cleanliness: 1, location: 1, check_in: 1, value: 1}
  // ]

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

    // let accuracy = 0;
    for (let i = 0; i < reviews.length; i++) {
      let review = reviews[i];
      
      for (let key in ratings) {
        ratings[key] += review[key]
      }
    }
    // { accuracy: 24, communication: 24, etc }

    for (let key in ratings) {
      ratings[key] = (ratings[key] / reviews.length)
    }

    return ratings;
  }

  // ratings = 
  // { accuracy: 3,
  // communication: 3,
  // cleanliness: 3,
  // location: 3,
  // check_in: 3,
  // value: 3 }

  render() {
    const { reviews } = this.props;
    if (!reviews) {
      return <div className="loader">Loading...</div>
    }

    const ratingsObj = this.findAvgRating();
    const acc = ratingsObj.accuracy;
    const comm = ratingsObj.communication;
    const clean = ratingsObj.cleanliness;
    const loc = ratingsObj.location;
    const checkin = ratingsObj.check_in;
    const value = ratingsObj.value;

    const accStars = <div className='stars-row'>{this.renderStars(acc)}</div>
    const commStars = <div className='stars-row'>{this.renderStars(comm)}</div>
    const cleanStars = <div className='stars-row'>{this.renderStars(clean)}</div>
    const locStars = <div className='stars-row'>{this.renderStars(loc)}</div>
    const checkinStars = <div className='stars-row'>{this.renderStars(checkin)}</div>
    const valueStars = <div className='stars-row'>{this.renderStars(value)}</div>

    const reviewStarSection = (
      <div className='review-stars'>
        <div className='stars-col1'>
          Accuracy {accStars}
          Communication {commStars}
          Cleanliness {cleanStars}
        </div>
        <div className='stars-col2'>
          Location {locStars}
          Check-in {checkinStars}
          Value {valueStars}
        </div>
      </div>
    )

    if (reviews.length === 0) {
      return (
        <div>
          <div>
            {reviewStarSection}
          </div>

          <div className='review-content'>
            No reviews yet.
          </div>
        </div>
      )
    }

    const reviewItems = reviews.map((review, idx) => {
      return (
        <div className='review-index-item' key={idx}>
          <ReviewIndexItem review={review}/>
        </div>
      )
    })

    return (
      <div>
        <div>
          {reviewStarSection}
        </div>

        <ul className='reviews-list'>
          {reviewItems}
        </ul>
      </div>
    )
  }
}

export default withRouter(ReviewIndex);