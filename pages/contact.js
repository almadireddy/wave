import React, {Component} from 'react';
import ReCaptcha from "react-google-recaptcha";
import fetch from "node-fetch";
import {Layout, BigAction} from '../components/components';
import {FormGroup, Container, Row, Col, Button, Form, Label, Input, FormText} from 'reactstrap';

export default class Connect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      message: "",
      emailInvalid: false,
      displayInvalidMessage: false,
      displayEmptyMessage: false,
      displaySuccessMessage: false,
      displayErrorMessage: false,
      recaptchaScore: "",
    };

    this.onRecaptchaChange = this.onRecaptchaChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.displayEmailInvalid = this.displayEmailInvalid.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
    let emailInvalid = e.target.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) === null;
    this.setState({ emailInvalid: emailInvalid}); 
  }

  displayEmailInvalid() {
    if (this.state.emailInvalid) {
      this.setState({displayInvalidMessage: true})
    } else {
      this.setState({displayInvalidMessage: false})
    }
  }

  onRecaptchaChange(e) {
    this.setState({recaptchaScore: e});
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  onMessageChange(e) {
    this.setState({ message: e.target.value })
  }

  async submitHandler(e) {
    e.preventDefault();
    
    if (!(this.state.email == '' || this.state.recaptchaScore == '' || this.state.name == '' || this.state.message == '' || this.state.emailInvalid )) {
      this.setState({ displayEmptyMessage: false });
      let response = await fetch('https://wave-contact-mailer.almadireddy.now.sh', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.state.email,
          name: this.state.name,
          message: this.state.message,
          recaptchaScore: this.state.recaptchaScore,
        })
      });
      if (response.status == 200) {
        this.setState({displaySuccessMessage: true});

        this.setState({
          email: "",
          name: "",
          message: "",
          whom: "",
          where: "",
          emailInvalid: false,
          displayInvalidMessage: false,
          displayEmptyMessage: false,
          recaptchaScore: ""
        });
      } else {
        this.setState({displayErrorMessage: true})
      }
      grecaptcha.reset();
    }
    else 
      this.setState({displayEmptyMessage: true});
  }

  render() {
    return (
      <Layout className='Connect'>
        <BigAction
          big
          text="Contact Us">
            <Row>
              <Col>
                <h2>Connect with Wave Realty!</h2>
                <p>We'd love to get started Fugiat non magna aliquip eu Lorem commodo anim amet ea ullamco.!</p>
                  {this.state.displaySuccessMessage &&
                    <div className='success-message'>
                      <h3 className='text-success'>Thanks for reaching out! 🎉</h3>
                      <p>We will get back to you at the email you provided.</p>
                    </div>
                  }
                  {this.state.displayErrorMessage &&
                    <div className='error-message'>
                      <h3 className='text-danger'>Something went wrong 😔</h3>
                      <p>Try submitting the form again.</p>
                    </div>
                  }
              </Col>
            </Row>
          </BigAction>
          <Container>
            <Row>
              <Col sm="6">
                <form className='contact-form' ref={this.recaptchaRef} onSubmit={this.submitHandler}>
                  <FormGroup>
                    <Label for="nameBox">Your Name</Label>
                    <Input id="nameBox" onChange={this.onNameChange}></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="emailBox">Your email</Label>
                    <Input id="emailBox"  onBlur={this.displayEmailInvalid} onChange={this.onEmailChange}></Input>

                    {this.state.displayInvalidMessage &&
                      <p className='invalid-email text-danger error-message'>Make sure you use a valid email!</p>
                    }
                  </FormGroup>
                  <FormGroup>
                    <Label for="messageBox">Message</Label>
                    <Input type="textarea" id="messageBox" rows="6" onChange={this.onMessageChange}></Input>
                  </FormGroup>
                  <FormGroup>
                    <ReCaptcha
                      size='normal'   
                      sitekey="6Lcvd5kUAAAAAPX2tL26dedSCt8pG-99r_U-B6bs"
                      onChange={this.onRecaptchaChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Button>Submit</Button>
                  </FormGroup>
                  {this.state.displayEmptyMessage &&
                    <p className="empty-message error-message">Please fill out everything!</p>}
                </form>
              </Col>
            </Row>
          </Container>
      </Layout>
    );
  };
}
