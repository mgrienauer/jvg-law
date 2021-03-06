import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const formStyling = {
	width: "100%",
	padding: "15px",
	border: "1px solid #ced4da",
	borderRadius: "5px",
};

export default class Example extends React.Component {
	render() {
		return (
			<>
				<Form
					name="contact"
					method="POST"
					className="mt-5"
					id="contact"
					style={formStyling}
				>
					<input type="hidden" name="form-name" value="contact" />
					<h2 className="text-center">Contact Us</h2>
					<p>
						Fill out the contact form or send an email to:{" "}
						<strong>john.grienauer@cox.net</strong>
					</p>
					<FormGroup>
						<Label for="exampleName">Name</Label>
						<Input
							type="text"
							name="name"
							id="exampleName"
							placeholder="Enter your full name"
						/>
					</FormGroup>
					<FormGroup>
						<Label for="examplePhone">Phone Number</Label>
						<Input
							type="text"
							name="phone"
							id="examplePhone"
							placeholder="Enter your phone number"
						/>
					</FormGroup>
					<FormGroup>
						<Label for="exampleText">Email</Label>
						<Input
							type="email"
							name="email"
							id="exampleEmail"
							placeholder="Enter your email"
						/>
					</FormGroup>
					<FormGroup>
						<Label for="exampleEmail">Your Message</Label>
						<Input
							type="textarea"
							name="message"
							id="exampleMessage"
							placeholder="Enter a brief description of your legal issue"
						/>
					</FormGroup>
					<Button type="submit" color="primary">
						Send Inquiry
					</Button>
				</Form>
			</>
		);
	}
}
