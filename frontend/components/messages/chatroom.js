import React from 'react';
import MessageForm from './message_form';
import { connect } from 'react-redux';
import { receiveMessage, fetchMessages } from '../../actions/message_actions';
import { fetchUser } from '../../actions/user_actions';

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
          if (!this.props.users[data.message.author_id]) {
            this.props.fetchUser(data.message.author_id).then(() => this.props.receiveMessage(data.message))
          } else {
            this.props.receiveMessage(data.message)
          }
        },
        speak: function(data) {
          return this.perform('speak', data)
        }
      }
    )

    this.props.fetchMessages(1);
    // because we hard coded in chat channel
  }

  componentDidUpdate() {
    // this.bottom.current.scrollIntoView();
  }
  
  render() {
    // debugger
    // if (Object.values(this.props.users).length === 0) {
    //   return <div className="loader">Loading...</div>
    // }

    // if (this.props.messages.length === 0) {
    //   return <div className="loader">Loading...</div>
    // }

    const messageList = this.props.messages.map((message, idx) => {
      return (
        <li className='individual-message' key={idx}>
          <div className='individual-message-user'>
            <i className="user-image far fa-user-circle"></i>
            {this.props.users[message.author_id].fname}
           </div>
          
          <div className='individual-message-body'>
            {message.body}
          </div>

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
    fetchMessages: (id) => dispatch(fetchMessages(id)),
    fetchUser: (id) => dispatch(fetchUser(id))
  }
}

export default connect(msp, mdp)(ChatRoom);

