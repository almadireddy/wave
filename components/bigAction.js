import React from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col} from 'reactstrap'

const BigAction = props => {
  return (
    <Container className={props.className}>
      <Row id="big-action-jumbotron">
        <Col sm="12">
          <p className="lead">{props.smallText}</p>
          <h1 className="display-2">{props.text}</h1>
        </Col>
        <Col sm="12">
          <a href={props.buttonLink} className="call-to-action">{props.buttonText}</a>
        </Col>
      </Row>
    </Container>
  )
}

BigAction.propTypes = {
  text: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  smallText: PropTypes.string,
  className: PropTypes.string
}

export default BigAction
