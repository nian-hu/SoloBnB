import React from 'react';
import { openAmenitiesModal } from '../../actions/modal_actions';

class ListingAmenities extends React.Component {
  constructor(props) {
  // debugger
    super(props)
  }

  findAmenities(amenityItems) {
    let amenityItems1;
    let amenityItems2;

    let newItems = amenityItems.slice(0, 4)

    if (newItems.length > 1) {
      let midpt = Math.ceil(newItems.length / 2);

      let amenityItems1 = newItems.slice(0, midpt);
      let amenityItems2 = newItems.slice(midpt);
      return {
        amenityItems1: amenityItems1,
        amenityItems2: amenityItems2
      }
    } else {
      return {
        amenityItems1: newItems
      }
    }
  }

  render() {
    const { listing } = this.props;
    const { amenities } = this.props;

    // if (!listing.amenity_ids) return [];

    // const amenities = listing.amenity_ids.map(id => {
    //   state.entities.amenities[id]
    // })

    if (amenities.length === 0) return null;

    const icon = amenity => {
      if (amenity === undefined) return null;
      switch (amenity.name) {
        case 'Wifi': {
          return <i id='amenity-icon' className="fas fa-wifi"></i>;
        }
        case 'Air conditioning': {
          return <i id='amenity-icon' className="fas fa-snowflake"></i>;
        }
        case 'Heat': {
          return <i id='amenity-icon' className="fas fa-sun"></i>;
        } 
        case 'Laundry': {
          return <i id='amenity-icon' className="fas fa-tint"></i>;
        }
        case 'Kitchen': {
          return <i id='amenity-icon' className="fas fa-utensils"></i>;
        }
        default:
          return null;
      }
    }

    const amenityItems = amenities.map((amenity, idx) => {
      if (amenity === undefined) return null;
      return (
        <div className="amenities-item" key={idx}>
          <div className='amenity-icon-container'>
            {/* <div className='amenity-icon'>  */}
              {icon(amenity)}
            {/* </div> */}

            <div className='amenity-name'>
              {amenity.name}
            </div>
          </div>
        </div>
      )
    })

    // debugger
    //what is amenity items?
    // amenity items is an array full of objects
    // [{}, {}, {}, {}, {}]

    // [1, 2, 3, 4, 5]
    // [1, 2, 3, 4]
    
    //splitting them in half
    //if the length is greater than 1 but less than 5

    // let amenityItems1;
    // let amenityItems2;

    // if (amenityItems.length > 1 && amenityItems.length < 5) {
    //   let midpt = Math.floor(amenityItems.length / 2);
    //   let amenityItems1 = amenityItems.slice(0, midpt);
    //   let amenityItems2 = amenityItems.slice(midpt);
    //   return amenityItems1;
    // }
    //
    // debugger

    let ameObj = this.findAmenities(amenityItems)

    return (
      <div className='amenities-box'>
        <h1 className='amenities-title'>Amenities</h1>
        <div className='amenities-list'>

          <div className='amenities-col1'>
            <ul className='amenities-items'>
              {/* {amenityItems} */}
              {/* {amenityItems1} */}
              {ameObj.amenityItems1}
            </ul> 
          </div>

            <div className='amenities-col2'>
              <ul className='amenities-items'>
                {/* {amenityItems} */}
                {/* {amenityItems2} */}
                {ameObj.amenityItems2}
              </ul> 
            </div>

        </div>
        
        <button className='amenities-show-all' onClick={() => dispatch(openAmenitiesModal('amenities', amenities))}>
          Show all amenities
        </button>
      </div>
    )
  }
}

export default ListingAmenities;