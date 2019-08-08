import React from 'react';

class MessageModal extends React.Component {
  constructor(props) {
    super(props);
    this.userId = props.userId;
  }

  render() {
    return (
      <h1>Hello {this.userId}</h1>
    )
  }
}

export default MessageModal;