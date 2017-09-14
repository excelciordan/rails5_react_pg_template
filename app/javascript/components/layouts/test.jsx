import React from 'react'
import PropTypes from 'prop-types'

const Test = props => (
  <div>Hello {props.name}!</div>
)

Test.defaultProps = {
  name: 'David'
}

Test.propTypes = {
  name: PropTypes.string
}

export default Test
