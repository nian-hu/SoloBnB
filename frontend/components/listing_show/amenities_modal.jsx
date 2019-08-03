import React from 'react';

class AmenitiesModal extends React.Component {
  render() {
    if (this.props.amenities === undefined) return null;
    if (this.props === undefined) return null;

    const amenityItems = this.props.amenities.map((amenity, idx) => {
      return (
        <li className='amenity-modal-item' key={idx}>
          {amenity.name}
        </li>
      )
    })

    return (
      <div>
        <div className='close-button topleft' onClick={this.props.closeModal}>&times;</div>
        <h1 className='amenity-modal-title'>Amenities</h1>
        <ul className='amenity-modal-list'>
          {amenityItems}
        </ul>
      </div>
    )
    
  }
}

export default AmenitiesModal;