import React from 'react';

class AmenitiesModal extends React.Component {
  render() {
    if (this.props.amenities === undefined) return null;
    if (this.props === undefined) return null;

    const amenityItems = this.props.amenities.map((amenity, idx) => {
      return (
        <li key={idx}>
          {amenity.name}
        </li>
      )
    })

    return (
      <ul>
        {amenityItems}
      </ul>
    )
    
  }
}

export default AmenitiesModal;