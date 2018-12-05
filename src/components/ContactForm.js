import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const formStyling = {
  width: '100%',
  padding: '15px',
  border: '1px solid #ced4da',
  borderRadius: '5px'
}

export default class Example extends React.Component {
  render() {
    return (
      <Form method="POST" action="https://formspree.io/mgrienauer@gmail.com" className="mt-5" style={formStyling}>
        <h2 className="text-center">Contact Us</h2>
        <FormGroup>
          <Label for="exampleName">Name</Label>
          <Input type="text" name="name" id="exampleName" placeholder="Enter your full name" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Email</Label>
          <Input type="email" name="_replyto" id="exampleEmail" placeholder="Enter your email" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Your Message</Label>
          <Input type="textarea" name="message" id="exampleMessage" placeholder="Enter a brief description of your legal issue" />
        </FormGroup>
        <Button type="submit">Send Inquiry</Button>
        <input type="hidden" name="_next" value="http://localhost:3000/components/" />
      </Form>
    );
  }
}
