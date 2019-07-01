import React from 'react'
import { Layout, BigAction, HomeListing } from '../components/components'
import { Container, Row, Col, FormGroup, Label, Input } from "reactstrap";

const Apply = () => {
  return (
    <Layout 
      className="Apply" 
      title="Apply" 
      displayTitle="Apply">
        <BigAction 
          text="Residential Apartment Application"
          big></BigAction>
        <Container>
          <Row>
            <Col sm='7'>
              <p>Online application submission is currently disabled. Please reach out to us to schedule an appointment!</p>
            </Col>
          </Row>
          <Row form>
            <Col md="6">
              <FormGroup>
                <Label for="bldgAddress">Building Address</Label>
                <Input disabled id="bldgAddress"></Input>
              </FormGroup>
            </Col>
            <Col md="1">
              <FormGroup>
                <Label for="aptNumber">Apt. No.</Label>
                <Input disabled id="aptNumber"></Input>
              </FormGroup>
            </Col>
            <Col md="5">
              <FormGroup>
                <Label for="agents">Agent(s)</Label>
                <Input disabled id="agents"></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md="6">
              <FormGroup>
                <Label for="leaseLength">Lease Length</Label>
                <Input disabled id="leaseLength"></Input>
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="leaseStart">Lease Start Date</Label>
                <Input disabled id="leaseStart"></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md="6">
              <FormGroup>
                <Label for="monthlyRest">Monthly Rent</Label>
                <Input disabled id="monthlyRest"></Input>
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="Security">Security</Label>
                <Input disabled id="Security"></Input>
              </FormGroup>
            </Col>
          </Row>
          <hr></hr>
          <Row form>
            <Col md="6">
              <FormGroup>
                <Label for="applicantName">Applicant Name</Label>
                <Input disabled id="applicantName"></Input>
              </FormGroup>
            </Col>
            <Col md="1">
              <FormGroup>
                <Label for="DOB">DOB</Label>
                <Input disabled id="DOB"></Input>
              </FormGroup>
            </Col>
            <Col md="5">
              <FormGroup>
                <Label for="SSN">SSN</Label>
                <Input disabled id="SSN"></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md="6">
              <FormGroup>
                <Label for="currentAddress">Current Address</Label>
                <Input disabled id="currentAddress"></Input>
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Label for="city">City</Label>
                <Input disabled id="city"></Input>
              </FormGroup>
            </Col>
            <Col md="1">
              <FormGroup>
                <Label for="state">State</Label>
                <Input disabled id="state"></Input>
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
                <Label for="zipcode">Zipcode</Label>
                <Input disabled id="zipcode"></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md="6">
              <FormGroup>
                <Label for="phone">Phone Number</Label>
                <Input disabled id="phone"></Input>
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Label for="montlyRent">Monthly Rent</Label>
                <Input disabled id="montlyRent"></Input>
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label for="howLong">How Long (years)</Label>
                <Input disabled id="howLong"></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md="12">
              <FormGroup>
                <Label for="email">Email Address</Label>
                <Input disabled id="email"></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md="6">
              <FormGroup>
                <Label for="landlordName">Present Landlord</Label>
                <Input disabled id="landlordName"></Input>
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="landlordPhone">Landlord's Phone</Label>
                <Input disabled id="landlordPhone"></Input>
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </Layout>
  )
}

export default Apply;
