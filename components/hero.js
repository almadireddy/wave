import React from 'react'
import { string } from 'prop-types'
import {WaveNav} from './components'

const Hero = props => (
  <div className="hero">
    <WaveNav title={props.title}></WaveNav>
    <h2 className="title">{props.title}</h2>
  </div>
)

Hero.propTypes = {
  title: string
}

export default Hero
