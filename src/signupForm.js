import React, { Component } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import fb from './firebase'

class SignupForm extends Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: '',
      showModal: false
    }
    this.updateEmail = this.updateEmail.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.submit = this.submit.bind(this)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }

  close () {
    this.setState({showModal: false})
  }

  open () {
    this.setState({showModal: true})
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
        <div onClick={this.open}>
          Log in / Sign up
        </div>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Log in / Sign up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={6}>
                <form onSubmit={this.submit}>
                  <input
                    type='text'
                    id='email'
                    className='form-control'
                    value={this.state.email}
                    onChange={this.updateEmail}
                    placeholder='Your email address'
                  />
                  <input
                    type='password'
                    className='form-control'
                    value={this.state.password}
                    onChange={this.updatePassword}
                    id='password'
                  />
                  <input className='btn btn-primary' type='submit' value='Sign in' />
                </form>
              </Col>
              <Col md={6}>
                Sign In
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default SignupForm
