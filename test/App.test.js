jest.unmock('../src/App')

import React from 'react'
import { shallow } from 'enzyme'

import App from '../src/App'
import NavigationBar from '../src/navigationBar'

describe('<App />', () => {
  it('renders navigation bar', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.contains('NavigationBar')).to.be.true
  })
})
