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

        <form onSubmit={this.handleSubmit}>
          <h1 className='review-form-title'>{formType}</h1>

          <div>
            <h1>Review</h1>
            <textarea 
              value={this.state.body}
              placeholder="Review goes here"
              onChange={this.handleChange('body')}
            ></textarea>
          </div>

          <div>
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

          <div>
            <h1>Communication</h1>
            <input
              type="text"
              value={this.state.communication}
              onChange={this.handleChange('communication')}
            />
          </div>

          <div>
            <h1>Cleanliness</h1>
            <input
              type="text"
              value={this.state.cleanliness}
              onChange={this.handleChange('cleanliness')}
            />
          </div>

          <div>
            <h1>Location</h1>
            <input
              type="text"
              value={this.state.location}
              onChange={this.handleChange('location')}
            />
          </div>

          <div>
            <h1>Check-In</h1>
            <input
              type="text"
              value={this.state.check_in}
              onChange={this.handleChange('check_in')}
            />
          </div>

          <div>
            <h1>Value</h1>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange('value')}
            />
          </div>

          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }

}

export default withRouter(ReviewForm);