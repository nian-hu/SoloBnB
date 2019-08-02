import React from 'react';

class ListingDescription extends React.Component {
  render() {
    const { listing } = this.props;
    return (
      <div className='listing-box'>
        <div className='listing-header'>
          <h1 className='listing-title'>{listing.title}</h1>
          <h2 className='listing-price'>${listing.price}/night</h2>
        </div>
        <p className='listing-copy'>{listing.description}</p>
      </div>
    )
  }
}


export default (ListingDescription)