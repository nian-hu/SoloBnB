import React from 'react';
import moment from 'moment';

const ReviewIndexItem = ({review}) => {
  const date = review.created_at;
  const date2 = moment(date).format("LL");
  return (
    <div className='review-container'>
      <div className='review-info'>
        {date2}
      </div>

      <div className='review-content'>
      {review.body}
      </div>

    </div>
  )


}

export default ReviewIndexItem;