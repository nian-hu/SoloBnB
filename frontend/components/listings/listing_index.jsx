import React from 'react';
import ListingIndexItem from './listing_index_item';
import NavBarNormal from '../nav_bar/nav_bar_normal';
// import ListingMap from '../listing_map/listing_map';

class ListingIndex extends React.Component {

  constructor (props) {
    super(props)
    // this.listingMap = (
    //   <ListingMap
    //     listings={this.props.listings}
    //     updateFilter={this.props.updateFilter}
    //   />
    // )
  }

  componentDidMount() {
    // what is happening here??

    // const { fetchListings } = this.props;
    // fetchListings(); 
    window.scrollTo(0, 0)
    
  }

  // componentDidUpdate() {

  // }

  render() {
    const { listings } = this.props;
    // if (!listings) {return null;}
    // this.listingMap.listings = listings
    if (!listings) {
      return <div className="loader">Loading...</div>
    }

    if (listings.length === 0) {
      return (
        <div>
          {/* <NavBarNormal /> */}
          {/* <div className='listings-index-container'> */}
          <div>
            <div className='no-listing-message'>
              <h1>No available listings found</h1>
              <p>
                Try adjusting your search by moving or zooming out on the map.
              </p>
              <p>
                Or try another set of dates to see if there are availabilities.
              </p>
            </div>

            {/* <div>
              <div className="listings-map">
                {this.listingMap}
              </div>
            </div> */}
          </div>
        </div>
      )
    }

    const listingItems = listings.map((listing, idx) => {
      return (
        <div key={idx} className="listing-item">
          <ListingIndexItem listing={listing} />
        </div>
      )
    })

    return (
      <div>
        {/* <NavBarNormal/> */}
        {/* <div className="listings-index-container"> */}
          {/* <div className="listings-items-index"> */}
          <div>
            <ul className="listings-list">
              {listingItems}
            </ul>
          </div>
          {/* <div className="listings-map">
            <ListingMap
              listings={listings}
              updateFilter={this.props.updateFilter}
            />
          </div> */}
      </div>
    )
  }
}

export default ListingIndex;