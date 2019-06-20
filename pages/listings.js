import React from 'react'
import { Layout, BigAction, HomeListing } from '../components/components'
import { Container, Row, Col, Jumbotron } from "reactstrap";

const Listings = () => {
  return (
    <Layout 
      className="listings" 
      title="Listings" 
      displayTitle="Listings"></Layout>
  )
}

export default Listings;

/*

Layout.propTypes = {
  displayTitle: string,
  title: string,
  description: string,
  url: string,
  ogImage: string
}
*/