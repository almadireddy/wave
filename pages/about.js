import React from 'react'
import { Layout, BigAction, HomeListing } from '../components/components'
import { Container, Row, Col, Jumbotron } from "reactstrap";

const About = () => {
  return (
    <Layout 
      className="About" 
      title="About" 
      displayTitle="About">
      
      <BigAction
        className="hero" 
        big
        text="A better real estate experience.">
          <Row>
            <Col sm='10'>
              <img className='img-fluid' src="https://unsplash.it/1280/720"></img>
            </Col>
          </Row>
        </BigAction>
      <Container>
        <Row>
          <Col sm='7'>
            <p className="about-lead lead">Founded in 2016, Aliqua nostrud anim eiusmod ut ipsum et mollit incididunt ullamco reprehenderit anim elit pariatur tempor.</p>
          </Col>
        </Row>
        <Row>
          <Col sm='5'>
            <img className="img-fluid" src="https://unsplash.it/800/600"></img>
          </Col>
          <Col sm="7">
            <p>
              Irure duis ex incididunt duis. Ea id eu minim ipsum exercitation ut Lorem officia nisi veniam. Laborum Lorem eu culpa ullamco Lorem aute commodo ut sit dolore reprehenderit non. Culpa aute cupidatat magna mollit commodo aute ullamco et eiusmod sit consequat sunt.
            </p>
            </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default About;

/*

Layout.propTypes = {
  displayTitle: string,
  title: string,
  description: string,
  url: string,
  ogImage: string
}
*/