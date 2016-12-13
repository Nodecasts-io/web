import React, { Component } from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import SignupForm from './signupForm'

class NavigationBar extends Component {
  render () {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='/'>Nodecasts</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href='#'>Videos</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={2} href='#'>
              <SignupForm />
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default NavigationBar
