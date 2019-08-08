import React from 'react';
import { withRouter } from 'react-router-dom';

class ListingDescription extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { host } = this.props;
    this.props.history.push(`/users/${host.id}`);
  }

  render() {
    const { listing, host } = this.props;
    if (!host) {
      return <div className="loader">Loading...</div>
    }

    return (
      <div className='listing-box'>
        <div className='listing-header'>

          <div className='listing-title-container'>
            <h1 className='listing-title'>{listing.title}</h1>
            {/* <h2 className='listing-price'>${listing.price}/night</h2> */}
            <h2 className='listing-city'>{listing.city}</h2>
          </div>
          
          <div onClick={this.handleClick} className='listing-host-container'>
            {/* <img 
              src={listing.host.photoUrl}
              // src={photo}
              className='host-profile-picture'
            /> */}
            <h1>{host.fname}</h1>
          </div>

        </div>
        <p className='listing-copy'>{listing.description}</p>
      </div>
    )
  }
}


export default withRouter(ListingDescription)