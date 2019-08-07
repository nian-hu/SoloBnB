import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
  // listing is being passed down as prop
  // unclear if I need it yet

  componentDidMount() {
    // this.props.fetchReviews()
  }

  renderStars() {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(<i key={i} className="far fa-star"></i>)
    }

    return stars;
  }

  render() {
    const { reviews } = this.props;
    if (!reviews) {
      return <div className="loader">Loading...</div>
    }

    const stars = <div className='stars-row'>{this.renderStars()}</div>
    
    if (reviews.length === 0) {
      return (
        <div>
          <div className='review-stars'>
            <div className='stars-col1'>
              {stars}
              {stars}
              {stars}
            </div>
            <div className='stars-col2'>
              {stars}
              {stars}
              {stars}
            </div>
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
        <ul className='reviews-list'>
          {reviewItems}
        </ul>
      </div>
    )
  }
}

export default ReviewIndex;