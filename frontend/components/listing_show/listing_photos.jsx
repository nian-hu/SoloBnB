import React from "react";

class ListingPhotos extends React.Component {

  render() {
    const { listing } = this.props;
    return (
      <div className="listing-photos-container">
        <div className="row">
          <div className="primary-column">
            <img src="https://wp.homepolish.com/wp-content/uploads/Homepolish-interior-design-79f54-800x500.jpg" />
          </div>

          <div className="secondary-column">
            <div className="subcolumn">
              <img src="https://wp.homepolish.com/wp-content/uploads/Homepolish-interior-design-79f54-800x500.jpg" />
            </div>

            <div className="subcolumn">
              <img src="https://wp.homepolish.com/wp-content/uploads/Homepolish-interior-design-79f54-800x500.jpg" />
            </div>
          </div>

          <div className="secondary-column">
            <div className="subcolumn">
              <img src="https://wp.homepolish.com/wp-content/uploads/Homepolish-interior-design-79f54-800x500.jpg" />
            </div>

            <div className="subcolumn">
              <img src="https://wp.homepolish.com/wp-content/uploads/Homepolish-interior-design-79f54-800x500.jpg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingPhotos;
