import React from "react";

class ListingPhotos extends React.Component {

  render() {
    const { listing } = this.props;
    debugger
    if (Object.keys(listing).length === 0) return null;
    debugger

    return (
      <div className="listing-photos-container">
        <div className="row">
          <div className="primary-column">
            <img src={listing.photoUrls[0]} />
          </div>

          <div className="secondary-column">
            <div className="subcolumn">
              <img src={listing.photoUrls[1]} />
            </div>

            <div className="subcolumn">
              <img src={listing.photoUrls[2]} />
            </div>
          </div>

          <div className="secondary-column">
            <div className="subcolumn">
              <img src={listing.photoUrls[3]} />
            </div>

            <div className="subcolumn">
              <img src={listing.photoUrls[4]} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingPhotos;
