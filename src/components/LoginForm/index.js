import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
      this.onSubmitSuccess()
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          placeholder='Enter Password'
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderEmailField = () => {
    const {email} = this.state
    return (
      <>
        <label className="input-label" htmlFor="email">
          E-Mail
        </label>
        <input
          type="text"
          id="email"
          className="username-input-field"
          placeholder='Enter E-Mail'
          value={email}
          onChange={this.onChangeEmail}
        />
      </>
    )
  }

  render() {
    return (
      <div className="login-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <h1 className='login-heading'>Login</h1>
          <img
          src="https://www.pngkey.com/png/full/138-1385814_social-media-analytics-social-media-analytics-icon.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
          <img
            src="https://www.pngkey.com/png/full/138-1385814_social-media-analytics-social-media-analytics-icon.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{this.renderEmailField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
