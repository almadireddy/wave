import React from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col} from 'reactstrap'
import Link from "next/link";
const BigAction = props => {
  return (
    <Container className={"big-action " + props.className}>
      <Row id="big-action-jumbotron">
        <Col sm="12">
          {props.smallText != null &&
            <p className="lead">{props.smallText}</p>
          }
          <h1 className={props.big ? "display-1" : "display-3"}>{props.text}</h1>
        </Col>
        {props.buttonText != null &&
          <Col sm="12">
            <a href={props.buttonLink} className="call-to-action">{props.buttonText}</a>
          </Col>
        }
      </Row>
      <div className="big-action-children">
        {props.children}
      </div>
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
