import React from 'react'
import PropTypes from 'prop-types';

const SingleHomeListing = props => {
  return (
    <div className= {props.className + " buy-sell-listing"} >
      <p className='accent-header'>
        {props.accentText}
      </p>
      <h3 className="listing-description">{props.description}</h3>
      <h4 className="listing-rate">{props.rate}</h4>
      <a href={props.url}>See Listing</a>
      {props.images && 
        <div className="listing-images">
            <img src="https://unsplash.it/300/200" className="img-fluid"></img>
          <img src="https://unsplash.it/300/200" className="img-fluid"></img>
        </div>
      }
    </div>
  )
}

SingleHomeListing.propTypes = {
  accentText: PropTypes.string,
  description: PropTypes.string,
  rate: PropTypes.string,
  url: PropTypes.string,
  images: PropTypes.bool,
  className: PropTypes.string
}

export default SingleHomeListing
