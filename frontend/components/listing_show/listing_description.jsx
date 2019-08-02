import React from 'react';

class ListingDescription extends React.Component {
  render() {
    const { listing } = this.props;
    return (
      <div className='listing-box'>
        <h1 className='listing-title'>{listing.title}</h1>
        <h2 className='listing-price'>${listing.price}/night</h2>
        <p className='listing-copy'>{listing.description}</p>
      </div>
    )
  }
}


export default (ListingDescription)