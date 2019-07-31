import React from 'react';

const ListingIndexItem = ({listing}) => {
  return (
    <div>
      <h1>{listing.title}</h1>
      <h1>${listing.price}/night</h1>
    </div>
  )
}

export default ListingIndexItem;