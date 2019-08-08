import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';

const msp = (state, ownProps) => {
  const { userId } = ownProps.match.params;
  const listing = Object.values(state.entities.listings).filter(obj => obj.host_id === userId)
  const user = state.entities.users[userId] || {};
  
  return {
    user,
    listing
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
      return (
        <div>
          <h1>I am the user show page</h1>
          <h1>{user.fname}</h1>
        </div>
      )
    }
  }
}

export default connect(msp, mdp)(UserShow)