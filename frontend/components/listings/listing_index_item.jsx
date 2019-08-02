import React from 'react';
import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux'; 
import Carousel from 'nuka-carousel';
// import { selectAmenities } from '../../reducers/selectors'

// const msp = (state, ownProps) => {
//   const { listingId } = ownProps.match.params;
//   // debugger
//   const amenities = selectAmenities(state, listingId);

//   return {
//     amenities
//   }
// }

// listing index item already has "listing" in props
// needs "amenities" in props as well

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
    const amenityIds = this.props.listing.amenity_ids;
    // debugger
    const icon = amenityIds.map((id, idx) => {
      if (id === 34) {
        return <i key={idx} className="fas fa-wifi"></i>;
      } else if (id === 35) {
        return <i key={idx} className="fas fa-snowflake"></i>;;
      } else if (id === 36) {
        return <i key={idx} className="fas fa-sun"></i>;;
      } else if (id === 37) {
        return <i key={idx} className="fas fa-tint"></i>;;
      } else if (id === 38) {
        return <i key={idx} className="fas fa-utensils"></i>;;
      }
    })

    // const icon = amenity_id => {
    //   switch (amenity_id) {
    //     case 36: {
    //       return <i className="fas fa-wifi"></i>;
    //     }
    //     case 37: {
    //       return <i className="fas fa-snowflake"></i>;
    //     }
    //     case 38: {
    //       return <i className="fas fa-sun"></i>;
    //     }
    //     // case 'Laundry': {
    //     //   return <i className="fas fa-tint"></i>;
    //     // }
    //     // case 'Kitchen': {
    //     //   return <i className="fas fa-utensils"></i>;
    //     // }
    //     default:
    //       return null;
    //   }
    // }

    // debugger
    // const amenityItems = this.props.amenities.map(amenity => {
    //   return (
    //     <li>
    //       Here is an amenity: {amenity.name}
    //     </li>
    //   )
    // })
    // debugger

    return (

      <div className='listing-index-item-container'>
  
        <div className='listing-index-item-photo-container'>
          <Carousel width={"300px"} heightMode={"first"} wrapAround={true}>
            <img src={this.props.listing.photoUrls[0]} />
            <img src={this.props.listing.photoUrls[1]} />
            <img src={this.props.listing.photoUrls[2]} />
            <img src={this.props.listing.photoUrls[3]} />
            <img src={this.props.listing.photoUrls[4]} />
          </Carousel>
        </div>


        <div className='listing-index-item-content-container' onClick={this.handleClick}>
          <div className='listing-index-title'>
            <p className='listing-item-title'>{title}</p>
          </div>

          {/* <div className='listing-index-amenities'>
            <ul className='listing-item-amenities'>{icon}</ul>
          </div> */}

          <div className='listing-index-price'>
            <p className='listing-item-price'>${price}/night</p>
          </div>
        </div>

      </div>
    )
  }
}

export default withRouter(ListingIndexItem);
// export default withRouter(connect(msp, null)(ListingIndexItem))