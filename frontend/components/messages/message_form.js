import React from 'react';
import { connect } from 'react-redux';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   App.cable.subscriptions.subscriptions[0].speak({
  //     message: this.state.body
  //   })
  //   this.setState({ body: '' })
  // }

  handleSubmit(e) {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].speak({
      message: {
        body: this.state.body,
        id: this.props.currentUserId
      }
    })
    this.setState({ body: '' })
  }


  render() {
    return (
      <div className='message-form-container'>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.body}
            onChange={this.handleChange('body')}
            placeholder='Write your message here'
            className='message-form-input'
          />
          <input className='message-submit-button' type='submit' />
        </form>
      </div>
    )
  }
}

const msp = state => {
  return {
    currentUserId: state.session.id
  }
}

export default connect(msp, null)(MessageForm);
