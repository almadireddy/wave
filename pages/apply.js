import React from 'react'
import { Layout, BigAction, HomeListing } from '../components/components'
import { Container, Row, Col, Jumbotron } from "reactstrap";

const Apply = () => {
  return (
    <Layout 
      className="Apply" 
      title="Apply" 
      displayTitle="Apply"></Layout>
  )
}

export default Apply;

/*

Layout.propTypes = {
  displayTitle: string,
  title: string,
  description: string,
  url: string,
  ogImage: string
}
*/