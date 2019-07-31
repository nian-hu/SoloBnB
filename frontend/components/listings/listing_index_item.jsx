import React from 'react';
import { withRouter } from 'react-router-dom';

class ListingIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.history.push(`/listings/${this.props.listing.id}`)
  }

  render() {
    const { title, price } = this.props.listing
    return (
      <div className='listing-index-item' onClick={this.handleClick}>
        <div className='listing-index-title'>
          <h2>{title}</h2>
        </div>

        <div className='listing-index-price'>
          <p>${price}/night</p>
        </div>
      </div>
    )
  }
}

export default withRouter(ListingIndexItem);