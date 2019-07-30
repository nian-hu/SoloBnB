import React from 'react'
import { Link } from 'react-router-dom'
import { merge } from 'lodash'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.processForm(user);
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  renderErrors() {
    return (
      const errors = errors ? (
        <ul>{errors.map((error, idx) => <li key={idx}>{error}</li>)}</ul>
      ) : (
          null
        )
    )
  }

  render() {
    const { formType, errors } = this.props;

    const link = formType === 'login' ? (
      <Link to="/signup">Sign Up</Link>
    ) : (
        <Link to="/login">Log In</Link>
      )

    return (
      <div>
        {errors}
        <form onSubmit={this.handleSubmit}>
          <h2>{formType}</h2>
          <label>
            First Name
            <input onChange={this.handleChange("fname")} type="text" />
          </label>

          <label>
            Last Name
            <input onChange={this.handleChange("lname")} type="text" />
          </label>

          <label>
            Email Address
            <input onChange={this.handleChange("email")} type="text" />
          </label>

          <label>
            Password
            <input onChange={this.handleChange("password")} type="password" />
          </label>

          <button>Submit</button>
        </form>
        
        {link}
      </div>
    )
  }
}

export default SessionForm;
