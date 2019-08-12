export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(listings) {
    listings.forEach(listing => {
      if (!Object.keys(this.markers).includes(listing.id)) {
        this.createMarkerFromListing(listing);
      }
    })
  }

    // const listingObj = {};
    // listings.forEach(listing => {
    //   listingObj[listing.id] = listing;
    // })

    // Object.values(this.markers).forEach(marker => {
    //   if (!Object.keys(listingObj).includes(marker.listingId)) {
    //     this.removeMarker(this.markers[listingId])
    //   }
    // })
  

  createMarkerFromListing(listing) {
    const position = new google.maps.LatLng(listing.lat, listing.long)
    // const markerIcon = {
    //   fillColor: "red",
    //   fillOpacity: 1,
    //   scale: 1.15,
    //   strokeColor: "#484848",
    //   strokeWeight: 0.3
    // }

    const marker = new google.maps.Marker({
      position,
      map: this.map,
      animation: google.maps.Animation.DROP,
      listingId: listing.id,
      // icon: markerIcon,
      label: {
        text: `$${listing.price}`,
        fontSize: "12px",
        fontWeight: "bold",
        color: "white"
      }
    })
    this.markers[listing.id] = marker;
  }

  // removeMarker(marker) {
  //   this.markers[marker.listingId].setMap(null);
  //   delete this.markers[marker.listingId];
  // }
}