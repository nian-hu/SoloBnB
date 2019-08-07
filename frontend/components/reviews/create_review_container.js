import { createReview } from '../../actions/review_actions';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  return {
    formType: 'Create review',
    listingId: ownProps.listingId
  }
}

const mdp = dispatch => {
  return {
    action: review => dispatch(createReview(review)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(msp, mdp)(ReviewForm)