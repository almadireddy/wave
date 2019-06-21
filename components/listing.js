import React from 'react'
import {string, number, object} from 'prop-types'

const Listing = props => {
  const { address, neighborhood, city, state, bedrooms, bathrooms, sqft, rateMonthly, description, featured_image } = props.listing
  return (
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
          <a className="call-to-action">See Listing</a>
        </div>
      </div>
    </div>
  )
}

Listing.propTypes = {
  listing: object
}

export default Listing
