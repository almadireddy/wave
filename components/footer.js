import React from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col} from 'reactstrap'

const Footer = props => (
  <Container className="footer">
    <Row>
      <Col>
        <h2>Wave Realty</h2>
      </Col>
      <Col>Currently under construction. Draft created by <a href="https://ligature.design">Ligature Design</a></Col>
    </Row>
  </Container>
)

Footer.propTypes = {

}

export default Footer
