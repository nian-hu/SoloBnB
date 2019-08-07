import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  // this.props.listingId
  //but right now I have it nested so listing id is wildcard?

  //this.props.createReview takes in a review 

  constructor(props) {
    super(props);
    //check that props.listingId exists
    debugger
    this.state = {
      body: '',
      accuracy: 0,
      communication: 0,
      cleanliness: 0,
      location: 0,
      check_in: 0,
      value: 0,
      listing_id: props.listingId
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    // this.handleRating = this.handleRating.bind(this);
    // this.stars = document.getElementsByClassName('fas fa-star');
      // < i class="fas fa-star" ></i >
  } 

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => {
      this.props.closeModal();
    })
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  // handleClick() {}

  // handleRating(category, start, end) {
  //   for (let i = start; i < end; i++) {

  //   }

  //   this.setState({ [category]:  })
  // }

  handleRatingChange(field, rating) {
    return e => {
      this.setState({ [field]: rating })
    }
  }

  render() {
    const { formType } = this.props;
    // const inputs = [1, 2, 3, 4, 5];

    return (
      <div>
        <div className='close-button topleft' onClick={this.props.closeModal}>&times;</div>
        <h1 className='review-form-title'>{formType}</h1>

        <form className='review-form-container' onSubmit={this.handleSubmit}>

          <div className='star-rating-container'> 
            <div className='star-rating-col1'> 
            
            <div className='star-rating'>
              <h1>Accuracy</h1>
              {/* <input
                type="text"
                value={this.state.accuracy}
                onChange={this.handleChange('accuracy')}
              /> */}
              < i className={`${ this.state.accuracy >= 1 ? "fill" : "white" } fas fa-star`} onClick={this.handleRatingChange("accuracy", 1)} ></i >
              < i className={`${ this.state.accuracy >= 2 ? "fill" : "white" } fas fa-star`} onClick={this.handleRatingChange("accuracy", 2)} ></i >
              < i className={`${ this.state.accuracy >= 3 ? "fill" : "white" } fas fa-star`} onClick={this.handleRatingChange("accuracy", 3)} ></i >
              < i className={`${ this.state.accuracy >= 4 ? "fill" : "white" } fas fa-star`} onClick={this.handleRatingChange("accuracy", 4)} ></i >
              < i className={`${ this.state.accuracy >= 5 ? "fill" : "white" } fas fa-star`} onClick={this.handleRatingChange("accuracy", 5)} ></i >
            </div>

            <div className='star-rating'>
              <h1>Communication</h1>
              < i className={`${this.state.communication >= 1 ? "fill" : "white"} fas fa-star`} onClick={this.handleRatingChange("communication", 1)} ></i >
              < i className={`${this.state.communication >= 2 ? "fill" : "white"} fas fa-star`} onClick={this.handleRatingChange("communication", 2)} ></i >
              < i className={`${this.state.communication >= 3 ? "fill" : "white"} fas fa-star`} onClick={this.handleRatingChange("communication", 3)} ></i >
              < i className={`${this.state.communication >= 4 ? "fill" : "white"} fas fa-star`} onClick={this.handleRatingChange("communication", 4)} ></i >
              < i className={`${this.state.communication >= 5 ? "fill" : "white"} fas fa-star`} onClick={this.handleRatingChange("communication", 5)} ></i >
            </div>

              <div className='star-rating'>
              <h1>Cleanliness</h1>
              < i className={`${this.state.cleanliness >= 1 ? "fill" : "white"} fas fa-star`} onClick={this.handleRatingChange("cleanliness", 1)} ></i >
              < i className={`${this.state.cleanliness >= 2 ? "fill" : "white"} fas fa-star`} onClick={this.handleRatingChange("cleanliness", 2)} ></i >
              < i className={`${this.state.cleanliness >= 3 ? "fill" : "white"} fas fa-star`} onClick={this.handleRatingChange("cleanliness", 3)} ></i >
              < i className={`${this.state.cleanliness >= 4 ? "fill" : "white"} fas fa-star`} onClick={this.handleRatingChange("cleanliness", 4)} ></i >
              < i className={`${this.state.cleanliness >= 5 ? "fill" : "white"} fas fa-star`} onClick={this.handleRatingChange("cleanliness", 5)} ></i >
            </div>
          </div> 

          <div className='star-rating-col2'>
              <div className='star-rating'>
            <h1>Location</h1>
             < i className={`${this.state.location >= 1 ? "fill" : "white"} fas fa-star`} onClick={this.handleRatingChange("location", 1)} ></i >
            < i className={`${this.state.location >= 2 ? "fill" : "white"} fas fa-star`} onClick={this.handleRatingChange("location", 2)} ></i >
            < i className={`${this.state.location >= 3 ? "fill" : "white"} fas fa-star`} onClick={this.handleRatingChange("location", 3)} ></i >
            < i className={`${this.state.location >= 4 ? "fill" : "white"} fas fa-star`} onClick={this.handleRatingChange("location", 4)} ></i >
            < i className={`${this.state.location >= 5 ? "fill" : "white"} fas fa-star`} onClick={this.handleRatingChange("location", 5)} ></i >
          </div>

              <div className='star-rating'>
            <h1>Check-In</h1>
            < i className={`${this.state.check_in >= 1 ? "fill" : "white"} fas fa-star`} onClick={this.handleRatingChange("check_in", 1)} ></i >
            < i className={`${this.state.check_in >= 2 ? "fill" : "white"} fas fa-star`} onClick={this.handleRatingChange("check_in", 2)} ></i >
            < i className={`${this.state.check_in >= 3 ? "fill" : "white"} fas fa-star`} onClick={this.handleRatingChange("check_in", 3)} ></i >
            < i className={`${this.state.check_in >= 4 ? "fill" : "white"} fas fa-star`} onClick={this.handleRatingChange("check_in", 4)} ></i >
            < i className={`${this.state.check_in >= 5 ? "fill" : "white"} fas fa-star`} onClick={this.handleRatingChange("check_in", 5)} ></i >
          </div>

              <div className='star-rating'>
            <h1>Value</h1>
             < i className={`${this.state.value >= 1 ? "fill" : "white"} fas fa-star`} onClick={this.handleRatingChange("value", 1)} ></i >
            < i className={`${this.state.value >= 2 ? "fill" : "white"} fas fa-star`} onClick={this.handleRatingChange("value", 2)} ></i >
            < i className={`${this.state.value >= 3 ? "fill" : "white"} fas fa-star`} onClick={this.handleRatingChange("value", 3)} ></i >
            < i className={`${this.state.value >= 4 ? "fill" : "white"} fas fa-star`} onClick={this.handleRatingChange("value", 4)} ></i >
            < i className={`${this.state.value >= 5 ? "fill" : "white"} fas fa-star`} onClick={this.handleRatingChange("value", 5)} ></i >
          </div>

          </div>
          
          </div>

          <div>
            <textarea 
              value={this.state.body}
              placeholder="Tell us about your experience."
              onChange={this.handleChange('body')}
              className='review-body-area'
            ></textarea>
          </div>

          <input className='review-submit-button' type="submit" value="Submit"/>
        </form>
      </div>
    )
  }

}

export default withRouter(ReviewForm);