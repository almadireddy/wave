import React from 'react'
import { withRouter } from 'next/router';
import fetch from "node-fetch";
import Layout from '../components/layout';
import { Container, Row, Col } from "reactstrap";
import BigAction from '../components/bigAction';

import { chunk } from "../functions";

export default class Listing extends React.Component {
  constructor() {
    super();
  }

  static async getInitialProps({query}) {
    const id = query.id;
    const res = await fetch(`https://wave-cms.herokuapp.com/listings/${id}`)
    const listing = await res.json();  

    let gallery = []
    for (let i = 1; i < 6; i++) {
      if (listing["gallery_image_" + i] != null) {
        gallery.push(listing["gallery_image_" + i])
      }
    }

    listing.gallery = chunk(gallery, 2);
    console.log(listing)
    return {listing};
  }

  render() {
    const { address, neighborhood, city, state, bedrooms, bathrooms, sqft, rateMonthly, description, featured_image, id } = this.props.listing;

    let smallText = bedrooms + " beds, " + bathrooms + " baths "
    return (
      <Layout
        className='listing-page'
        title={address} 
        displayTitle={address}>
        <BigAction text={address} big>
          <Row>
            <Col md="8">
              <p className="listing-lead">{description}</p>
            </Col>
          </Row>
        </BigAction>
        <Container>
          <Row>
            <Col md="8">
              <div className="listing">
                <div className="listing-featured-img">
                  <img className="img-fluid" src={featured_image.url}></img>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="listing-info">
                <h3 className="heading">Details</h3>
                <div className="rent-info">
                  <h2>${rateMonthly}/mo</h2>
                  {sqft && 
                    <h3>{sqft} sqft</h3>
                  }
                </div>
                <div className="location-info">
                  {neighborhood &&
                    <p className='listing-neighborhood lead'>{neighborhood}</p>
                  }
                  <p className="listing-city">{city}</p>
                  <p className="listing-state">{state}</p>
                </div>
                <div className="bed-bath">
                  <p>{bedrooms} bedrooms</p>
                  <p>{bathrooms} bathrooms</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          {this.props.listing.gallery.map(imageRow => (
            <Row className="justify-content-center">
              {imageRow.map((image) => (
                <Col md="6">
                  <img className="img-fluid" src={image.url}></img>
                </Col>
              ))} 
            </Row>
          ))}
        </Container>
      </Layout>
    )
  }
}
