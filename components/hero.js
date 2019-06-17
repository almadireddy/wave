import React from 'react'
import { string } from 'prop-types'

const Hero = props => (
  <div className="hero">
    <h2 className="title">{props.title}</h2>
  </div>
)

Hero.propTypes = {
  title: string
}

export default Hero
