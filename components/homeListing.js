import React from 'react'
import {Container, Row, Col} from 'reactstrap';
import { SingleHomeListing } from "./components";

const HomeListing = props => {
  return (
    <Row className="buy-sell-listings">
      <Col className='buy-sell-left'>
        <SingleHomeListing
          accentText="NO FEE - West 14th St."
          description="Chelsea 1BR/1Ba"
          rate="$2600/mo"
          url="/"
          images></SingleHomeListing>

          <SingleHomeListing
          accentText="NO FEE - West 14th St."
          description="Chelsea 1BR/1Ba"
          rate="$2600/mo"
          url="/"
          images></SingleHomeListing>
      </Col>

      <Col className='buy-sell-right'>
        <SingleHomeListing
          className="bg-img"
          accentText="NO FEE - West 14th St."
          description="Chelsea 1BR/1Ba"
          rate="$2600/mo"
          url="/"></SingleHomeListing>
          
        <SingleHomeListing
          className="bg-map"
          accentText="NO FEE - West 14th St."
          description="Chelsea 1BR/1Ba"
          rate="$2600/mo"
          url="/"></SingleHomeListing>
      </Col>
    </Row>
  )
}

export default HomeListing
