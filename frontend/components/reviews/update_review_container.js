import { updateReview } from '../../actions/review_actions';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  return {
    formType: 'Update review',
    listingId: ownProps.listingId
  }
}

const mdp = dispatch => {
  return {
    action: review => dispatch(updateReview(review)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(msp, mdp)(ReviewForm)