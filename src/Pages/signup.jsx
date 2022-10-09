import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


const Signup = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };


    return (
        <Container className="p-3">
            <h2>Sign up</h2>
            <Card>
                <Card.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group as={Row} className="mb-3" controlId="email">
                            <Form.Label column sm={2}>Email Address*</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="email" required placeholder="Enter email" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="password">
                            <Form.Label column sm={2}>Password*</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="password" placeholder="Enter password" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="repassword">
                            <Form.Label column sm={2}>Confirm Password</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="password" placeholder="Retype password" />
                            </Col>
                        </Form.Group>
                        <hr />
                        <Form.Group as={Row} className="mb-3" controlId="firstname">
                            <Form.Label column sm={2}>First Name:</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" required placeholder="First name" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="lastname">
                            <Form.Label column sm={2}>Last Name:</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" required placeholder="Last name" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="company">
                            <Form.Label column sm={2}>Company Name:</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" required placeholder="Company name" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="phone">
                            <Form.Label column sm={2}>Phone Number:</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Phone" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="address1">
                            <Form.Label column sm={2}>Address1</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" required placeholder="Address Line1" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="address2">
                            <Form.Label column sm={2}>Address2</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" required placeholder="Address Line2" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="suburb">
                            <Form.Label column sm={2}>Suburb/City:</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" required placeholder="Suburb/City" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="state">
                            <Form.Label column sm={2}>State/Province</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" required placeholder="State/Province" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="zipcode">
                            <Form.Label column sm={2}>Zip Code</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" required placeholder="Zip Code" />
                            </Col>
                        </Form.Group>

                        <hr />
                        <Button variant="primary" className="mr-1">Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}
export default Signup;