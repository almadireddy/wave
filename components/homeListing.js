import React from 'react'
import {Container, Row, Col} from 'reactstrap';
import { SingleHomeListing } from "./components";

const HomeListing = props => {
  return (
    <Container>

      <Row className="buy-sell-listings">
        <Col>
          <SingleHomeListing
            accentText="NO FEE - West 14th St."
            description="Chelsea 1BR/1Ba"
            rate="$2600/mo"
            url="/"
            images></SingleHomeListing>
        </Col>
        <Col>
            <SingleHomeListing
            accentText="NO FEE - West 14th St."
            description="Chelsea 1BR/1Ba"
            rate="$2600/mo"
            url="/"
            images></SingleHomeListing>
        </Col>
      </Row>
      <Row className="buy-sell-listings">
        <Col>
          <SingleHomeListing
            className="bg-img"
            accentText="NO FEE - West 14th St."
            description="Chelsea 1BR/1Ba"
            rate="$2600/mo"
            url="/"></SingleHomeListing>
        </Col>
        <Col>
          <SingleHomeListing
            className="bg-map"
            accentText="NO FEE - West 14th St."
            description="Chelsea 1BR/1Ba"
            rate="$2600/mo"
            url="/"></SingleHomeListing>
        </Col>
      </Row>
    </Container>
  )
}

export default HomeListing
