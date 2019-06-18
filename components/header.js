import React from 'react'
import PropTypes from 'prop-types'
import { WaveNav } from './components'

const Header = props => {
  return (
    <div className="header">
      <WaveNav></WaveNav>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
