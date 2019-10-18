import React from 'react';
import moment from 'moment';

const ReviewIndexItem = ({review}) => {
  const date = review.created_at;
  const date2 = moment(date).format("LL");
  return (
    <div className='review-container'>
      <div className='review-info'>
        <div className='review-date'>
          {date2}
        </div>
        
      </div>

      <div className='review-content'>
      {review.body}
      </div>

    </div>
  )


}

export default ReviewIndexItem;

// We are currently making another comment