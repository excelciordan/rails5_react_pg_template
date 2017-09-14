// This is an example of how an app may be built using react to drive the views.

import React from 'react'
import ReactDOM from 'react-dom'
import Test from  '../components/layouts/test'

import 'foundation-sites/scss/settings'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Test name="React" />,
    document.getElementById('enter-react'),
  )
})
