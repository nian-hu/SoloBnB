import React from 'react';

class ListingDescription extends React.Component {
  render() {
    const { listing } = this.props;
    return (
      <div className='listing-description'>
        <h1>Listing Description:</h1>
        <h1>{listing.title}</h1>
        <h2>{listing.price}</h2>
        <p>{listing.description}</p>
      </div>
    )
  }
}


export default (ListingDescription)