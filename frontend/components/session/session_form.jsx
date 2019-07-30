import React from 'react'
import { Link } from 'react-router-dom'
import { merge } from 'lodash'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { formType, otherForm } = this.props;

    return (
      <div>
        <form className='modal-form' onSubmit={this.handleSubmit}>
          <div className='close-button' onClick={this.props.closeModal}>&times;</div>
          
          <h2 className='login-message'>Please {formType} or {otherForm}</h2>

          <div className='session-errors'>
            {this.renderErrors()}
          </div>
          <br/>

            <label>
              First Name
              <input 
                type="text" 
                className='session-input'
                value={this.state.fname}
                onChange={this.handleChange("fname")}
              />
            </label>

            <br/>
            <label>
              Last Name
              <input
                type="text"
                className='session-input'
                value={this.state.lname}
                onChange={this.handleChange("lname")}
              />
            </label>

            <br/>
            <label>
              Email Address
              <input 
                type="text"
                className='session-input'
                value={this.state.email}
                onChange={this.handleChange("email")}
              />
            </label>

            <br/>
            <label>
              Password
              <input
                type="password" 
                className='session-input'
                value={this.state.password}
                onChange={this.handleChange("password")}
              />
            </label>

            <br/>
            <input className='session-submit' type="submit" value={formType}/>
          
        </form>
      </div>
    )
  }
}

export default SessionForm;
