import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import NavBarNormal from '../nav_bar/nav_bar_normal';
import ListingIndexItem from '../listings/listing_index_item';
import { openMessageModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  const { userId } = ownProps.match.params;
  const listings = Object.values(state.entities.listings).filter(obj => obj.host_id === userId)
  const user = state.entities.users[userId] || {};
  
  // debugger

  return {
    user,
    listings
  }
}

const mdp = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id))
  }
}

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchUser } = this.props;
    fetchUser(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.props.fetchUser(this.props.match.params.userId);
    }
  }

  render() {
    const { user } = this.props;
    if (!user) {
      return <div className="loader">Loading...</div>
    } else {

      // const { listings } = this.props;
      // debugger
      // const listingInfo = listings.length > 0 ? (
      //   listings.map((listing, idx) => {
      //     return (
      //       <div>
      //         <ListingIndexItem listing={listing} key={idx} />
      //       </div>
      //     )
      //   })
      // ) : (
      //   <div>
      //     <h1>No listings yet.</h1>
      //   </div>
      // )

      return (
        <div>
          <NavBarNormal />
          <div className='user-info-container'>
            <h1>Hi, I'm {user.fname}!</h1>
          </div>

          {/* <div className='user-listing-section'>
            <h1>{`${user.fname}'s listings`}</h1>
            {listingInfo}
          </div> */}

          <button
            className = 'user-message-button'
            onClick={() => dispatch(openMessageModal('message', user.id))}>
          Message User
          </button>
        </div>
      )
    }
  }
}

export default connect(msp, mdp)(UserShow)