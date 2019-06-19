import React from 'react'
import { Layout, BigAction, HomeListing } from '../components/components'
import { Container, Row, Col, Jumbotron } from "reactstrap";

const strings = {
  pageTitle: "Find your home.",
  service: "Buy, Sell, Invest."
}

const Home = () => (
  <Layout className="home" title="Home" displayTitle="Home">
    <BigAction
        className="home-hero" 
        big
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
        buttonLink="/listings">

      <HomeListing></HomeListing>
    </BigAction>

    <Container fluid className="company-picture">
      <Container>
        <Row>
          <Col>
            <img src="https://unsplash.it/1920/1080" className="img-fluid company"></img>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm='10' className="company-info">
            <p className="lead">
              Customers
            </p>
            <div className="customer-images">
              <img className="img-fluid" src="https://placehold.it/75"></img>
              <img className="img-fluid" src="https://placehold.it/75"></img>
              <img className="img-fluid" src="https://placehold.it/75"></img>
            </div>
            <h2>Trusted, Top-Notch service</h2>
            <p className="customer-quote">
              "They were reliable, proactive, easygoing, and a genuine pleasure to work with, making sure everything went smoothly - from viewing to lease signing."
            </p>
            <p className="customer-name">Meran L. (New York, NY)</p>
          </Col>
        </Row>
      </Container>
    </Container>
    
  </Layout>
)

export default Home
