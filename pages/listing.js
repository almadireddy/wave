import React from 'react'
import { withRouter } from 'next/router';
import fetch from "node-fetch";
import Layout from '../components/layout';
import { Container, Row, Col } from "reactstrap";
import BigAction from '../components/bigAction';
export default class Listing extends React.Component {
  constructor() {
    super();
  }

  static async getInitialProps({query}) {
    const id = query.id;
    const res = await fetch(`https://wave-cms.herokuapp.com/listings/${id}`)
    const listing = await res.json();  

    return {listing};
  }

  render() {
    const { address, neighborhood, city, state, bedrooms, bathrooms, sqft, rateMonthly, description, featured_image, id } = this.props.listing;
    return (
      <Layout
        className='listing-page'
        title={address} 
        displayTitle={address}>
        <Container>
          <BigAction text={address} bid>
            <Row>
              <Col sm="7">
                <p className="listing-lead">{description}</p>
              </Col>
            </Row>
          </BigAction>
          <Row className="justify-content-center">
            <Col>
              <div className="listing">
                <div className="listing-featured-img">
                  <img className="img-fluid" src={featured_image.url}></img>
                </div>
                <div className="listing-info">
                  <div className="location-info">
                    <h2 className="listing-address">{address}</h2>
                    <p className='listing-neighborhood lead'>{neighborhood}</p>
                    <p>{city}</p>
                    <p>{state}</p>
                  </div>
                  <div className="rent-info">
                    <h2>${rateMonthly}/mo</h2>
                    <p className="lead">{sqft} sqft.</p>
                    {console.log(id)}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}
