import React from 'react';
import ChatRoom from '../messages/chatroom';

class MessageModal extends React.Component {
  constructor(props) {
    super(props);
    this.userId = props.userId;
  }

  render() {
    return (
      <div>
        <h1>Hello {this.userId}</h1>
        <ChatRoom />
      </div>
    )
  }
}

export default MessageModal;