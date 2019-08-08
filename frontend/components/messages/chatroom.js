import React from 'react';
import MessageForm from './message_form';
import { connect } from 'react-redux';
import { receiveMessage, fetchMessages } from '../../actions/message_actions';

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
          // this.setState({
          //   messages: this.state.messages.concat(data.message)
          // })
          this.props.receiveMessage(data.message)
        },
        speak: function(data) {
          return this.perform('speak', data)
        }
      }
    )

    this.props.fetchMessages(3);
    // because we hard coded in chat channel
  }

  componentDidUpdate() {
    this.bottom.current.scrollIntoView();
  }
  
  render() {
    const messageList = this.props.messages.map((message, idx) => {
      return (
        <li className='individual-message' key={idx}>
          <i className="user-image far fa-user-circle"></i>
          {/* {message.sender_id} */}
          {this.props.users[message.author_id].fname}
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
  const messages = Object.values(state.entities.messages)

  return {
    users,
    messages
  }
}

const mdp = dispatch => {
  return {
    receiveMessage: (message) => dispatch(receiveMessage(message)),
    fetchMessages: (id) => dispatch(fetchMessages(id))
  }
}

export default connect(msp, mdp)(ChatRoom);

