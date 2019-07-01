import React from 'react'
import fetch from "node-fetch";
import { Layout, Listing, BigAction } from '../components/components'
import { Container, Row, Col, Jumbotron } from "reactstrap";
import { chunk } from "../functions";
export default class Listings extends React.Component {
  constructor() {
    super()
  }

  static async getInitialProps({req}) {
    let r = await fetch("https://wave-cms.herokuapp.com/listings");
    let listings = await r.json();
    listings = chunk(listings, 2)
    return {listings}
  }

  render() {
    return (
      <Layout 
        className="listings" 
        title="Listings" 
        displayTitle="Listings">
          <Container>
            <BigAction
              text="Listings"
              big>
              {this.props.listings.map((row) => (
                <Row className="">
                  {row.map(l => (
                    <Col md='6'>
                      <Listing key={l.id} listing={l}></Listing>
                    </Col>
                  ))}
                </Row>
              ))}
            </BigAction>
          </Container>
        </Layout>  
    )
  }
}
