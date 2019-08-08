import React from 'react';

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

  handleSubmit(e) {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].speak({
      message: this.state.body
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
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default MessageForm;