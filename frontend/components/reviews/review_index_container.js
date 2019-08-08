import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews } from '../../actions/review_actions';

const msp = state => {
  const reviews = Object.values(state.entities.reviews)
  return {
    reviews
  }
}

const mdp = dispatch => {
  return {
    fetchReviews: (id) => dispatch(fetchReviews(id))
  }
}

export default connect(msp, mdp)(ReviewIndex);