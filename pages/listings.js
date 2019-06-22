import React from 'react'
import fetch from "node-fetch";
import { Layout, Listing, BigAction } from '../components/components'
import { Container, Row, Col, Jumbotron } from "reactstrap";

export default class Listings extends React.Component {
  constructor() {
    super()
  }

  static chunk(array, size) {
    const chunked_arr = [];
    for (let i = 0; i < array.length; i++) {
      const last = chunked_arr[chunked_arr.length - 1];
      if (!last || last.length === size) {
        chunked_arr.push([array[i]]);
      } else {
        last.push(array[i]);
      }
    }
    return chunked_arr;
  }

  static async getInitialProps({req}) {
    let r = await fetch("https://wave-cms.herokuapp.com/listings");
    let listings = await r.json();
    listings = this.chunk(listings, 3)
    return {listings}
  }

  render() {
    console.log(this.props.listings);

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
