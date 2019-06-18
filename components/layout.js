import React from 'react'
import { string } from 'prop-types'
import { Hero, Nav, Header, Footer, Head } from './components'
import "../scss/styles.scss"
import 'bootstrap/scss/bootstrap.scss';

const Layout = props => (
  <div className="layout">
    <div className='layout-header'>
      <Head title={props.title} 
            description={props.description}
            url={props.ogImage}
            ogImage={props.ogImage}
      ></Head>
      <Header title={props.title}></Header>
    </div>
    <div className='layout-body'>
      {props.children}
    </div>
    <div className='layout-footer'>
      <Footer></Footer>
    </div>
  </div>
)

Layout.propTypes = {
  displayTitle: string,
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Layout
