import React from 'react'
import { Layout } from '../components/components'
import { Container, Row, Col, Jumbotron } from "reactstrap";
import BigAction from '../components/bigAction';

const strings = {
  pageTitle: "Find your next home here.",
  service: "Buy, Sell, Invest."
}

const Home = () => (
  <Layout className="home" title="Home" displayTitle="Home">
    <BigAction
        className="home-hero" 
        text={strings.pageTitle}
        smallText="Wave Realty"
        buttonText="See Featured Listings"
        buttonLink="/listings"></BigAction>
    <Container fluid className="listing-carousel">
      <Container>
        <Row className='align-items-center'>
          <Col sm='4'>
            <img src="https://unsplash.it/300/200"></img>
          </Col>
          <Col sm="6">
            <p className="mb-5">Open House on July 24 / East Village</p>
            <p className="lead mb-3">Two months free on studios in East Village.</p>
            <a href="/apply">Register Now</a>
          </Col>
          {/* <Col sm='2'>
            <div className="right-carousel-button"></div>
          </Col> */}
        </Row>
      </Container>
    </Container>
    <BigAction
        text={strings.service}
        smallText="Personalized service"
        buttonText="Explore all listings"
        buttonLink="/listings"></BigAction>
  </Layout>
)

export default Home
