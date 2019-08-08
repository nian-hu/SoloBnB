import React from 'react';
import MessageForm from './message_form';
import { connect } from 'react-redux';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.bottom = React.createRef();
  }

  componentDidMount() {
    App.cable.subscriptions.create(
      { channel: 'ChatChannel' }, 
      {
        received: data => {
          this.setState({
            messages: this.state.messages.concat(data.message)
          })
        },
        speak: function(data) {
          return this.perform('speak', data)
        }
      }
    )
  }

  componentDidUpdate() {
    this.bottom.current.scrollIntoView();
  }
  
  render() {
    const messageList = this.state.messages.map((message, idx) => {
      return (
        <li className='individual-message' key={idx}>
          <i className="user-image far fa-user-circle"></i>
          {/* {message.sender_id} */}
          {this.props.users[message.sender_id].fname}
          {message.body}
          <div ref={this.bottom} />
        </li>
      )
    });
    return (
      <div className='chatroom-container'>
        <h1>Chatroom</h1>
        <div className='message-list'>
          {messageList}
        </div>
        <MessageForm />
      </div>
    )
  }
}

const msp = state => {
  const users = state.entities.users

  return {
    users
  }
}

export default connect(msp, null)(ChatRoom);

