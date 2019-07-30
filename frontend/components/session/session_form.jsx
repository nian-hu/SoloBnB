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
      <div className='session-form-container'>
        <form onSubmit={this.handleSubmit} className='session-form-box'>
          <h2>Please {formType} or {otherForm}</h2>
          <div onClick={this.props.closeModal} className="close-x">X</div>
          {this.renderErrors()}
          <div className='session-form'>
            <br/>
            <label>
              First Name
              <input className='session-input' onChange={this.handleChange("fname")} type="text" />
            </label>

            <br/>
            <label>
              Last Name
              <input className='session-input' onChange={this.handleChange("lname")} type="text" />
            </label>

            <br/>
            <label>
              Email Address
              <input className='session-input' onChange={this.handleChange("email")} type="text" />
            </label>

            <br/>
            <label>
              Password
              <input className='session-input' onChange={this.handleChange("password")} type="password" />
            </label>

            <br/>
            <input className='session-submit' type="submit" value={formType}/>
          </div>
        </form>
      </div>
    )
  }
}

export default SessionForm;
