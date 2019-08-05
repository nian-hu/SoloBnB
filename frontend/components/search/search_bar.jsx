import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      lat: null,
      long: null
    }
    this.setNewLocation = this.setNewLocation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const input = document.getElementById('searchbar-input');
    this.autocomplete = new google.maps.places.Autocomplete(input);
    this.autocomplete.addListener('place_changed', this.setNewLocation);
  }

  setNewLocation() {
    const place = this.autocomplete.getPlace()
    this.setState({
      address: place.formatted_address,
      lat: place.geometry.location.lat(),
      long: place.geometry.location.lng()
    })
  }

  handleSubmit(e) {
    if (e.key === 'Enter') {
      e.preventDefault();

      const lat = this.state.lat || 40.716880;
      const long = this.state.long || -73.948810;

      const hash = `&lat=${lat}&long=${long}&checkin=null&checkin=null`

      // redirect to listings page
      this.props.history.push({
        pathname: '/listings',
        hash: hash
      })
    }
  }

  render() {
    return (
      <div className='searchbar-container'>
        <i className="fa fa-search" aria-hidden="true"></i>
        <input 
          type="text"
          id="searchbar-input"
          placeholder="Search"
          onKeyPress={this.handleSubmit}
        />
      </div>
    )
  }

}

export default withRouter(SearchBar);