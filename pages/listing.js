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

    let gallery = []
    for (let i = 1; i < 6; i++) {
      if (listing["gallery_image_" + i] != null) {
        gallery.push(listing["gallery_image_" + i])
      }
    }

    listing.gallery = gallery;
    console.log(listing)
    return {listing};
  }

  render() {
    const { address, neighborhood, city, state, bedrooms, bathrooms, sqft, rateMonthly, description, featured_image, id } = this.props.listing;
    return (
      <Layout
        className='listing-page'
        title={address} 
        displayTitle={address}>
        <BigAction text={address} big smallText={sqft + " sqft. " + bedrooms + " beds, " + bathrooms + " baths "}>
        </BigAction>
        <Container>
          <Row className="justify-content-center">
            <Col>
              <div className="listing">
                <div className="listing-featured-img">
                  <img className="img-fluid" src={featured_image.url}></img>
                </div>
                <div className="listing-info">
                  <div className="location-info">
                    {neighborhood &&
                      <p className='listing-neighborhood lead'>{neighborhood}</p>
                    }
                    <p className="listing-city">{city}</p>
                    <p className="listing-state">{state}</p>
                  </div>
                  <div className="rent-info">
                    <h2>${rateMonthly}/mo</h2>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md="8">
              <p className="listing-lead">{description}</p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {this.props.listing.gallery.map(image => (
              <Col md="6">
                <img className="img-fluid" src={image.url}></img>
              </Col>
            ))}
          </Row>
        </Container>
      </Layout>
    )
  }
}
