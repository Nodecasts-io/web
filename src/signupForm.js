import React, { Component } from 'react'
import fb from './firebase'

class SignupForm extends Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: ''
    }
    this.updateEmail = this.updateEmail.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.submit = this.submit.bind(this)
  }

  updateEmail (e) {
    this.setState({email: e.target.value})
  }

  updatePassword (e) {
    this.setState({password: e.target.value})
  }

  submit (e) {
    e.preventDefault()

    fb.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message

      console.log(errorCode, errorMessage)
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.submit}>
          <input
            type='text'
            id='email'
            value={this.state.email}
            onChange={this.updateEmail}
            placeholder='Your email address'
          />
          <input
            type='password'
            value={this.state.password}
            onChange={this.updatePassword}
            id='password'
          />
          <input type='submit' value='Sign in' />
        </form>
      </div>
    )
  }
}

export default SignupForm
