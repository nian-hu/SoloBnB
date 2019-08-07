import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
  // listing is being passed down as prop
  // unclear if I need it yet

  componentDidMount() {
    // this.props.fetchReviews()
  }

  render() {
    const { reviews } = this.props;
    if (!reviews) {
      return <div className="loader">Loading...</div>
    }

    // if (reviews.length === 0) {
    //   return (
    //     <div>
    //       No reviews yet.
    //     </div>
    //   )
    // }

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