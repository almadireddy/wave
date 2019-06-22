import React from 'react'
import {string, number, object} from 'prop-types'
import ListingLink from './listingLink'

const Listing = props => {
  const { address, neighborhood, city, state, bedrooms, bathrooms, sqft, rateMonthly, description, featured_image, id } = props.listing
  return (
    <div className="listing listing-preview">
      <div className="listing-address-container">
        <h2 className="listing-address">{address}</h2>
      </div>
      <div className="listing-featured-img">
        <img className="img-fluid" src={featured_image.url}></img>
      </div>
      <div className="listing-info">
        <div className="location-info">
          <p className='listing-neighborhood lead'>{neighborhood}</p>
          <p>{city}, {state}</p>
        </div>
        <div className="rent-info">
          <h2>${rateMonthly}/mo</h2>
          <p className="lead">{sqft} sqft.</p>
        </div>
      </div>
      <div className="listing-link-container">
        <ListingLink address={address} id={id}>See Listing</ListingLink>
      </div>
    </div>
  )
}

Listing.propTypes = {
  listing: object
}

export default Listing
