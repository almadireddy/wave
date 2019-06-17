import React from 'react'
import { string } from 'prop-types'
import { Hero, Nav, Head } from './components'
import "../scss/styles.scss"

const Layout = props => {
  return (
    <div className="content">
      <Head title={props.title} />
      
      <Nav title={props.title}></Nav>
      <Hero title={props.displayTitle}></Hero>

      {props.children}
    </div>
  )
}

Layout.propTypes = {
  displayTitle: string,
  title: string 
}

export default Layout
