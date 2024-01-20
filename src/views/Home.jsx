import React from "react";
import { Col, Form, Row } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <div className="top-bar">
        <h1 className="header">Code Tuner</h1>
        <h1
          className="header"
          style={{ cursor: "pointer", textDecoration: "underline" }}
        >
          Sign out
        </h1>
      </div>
      <Form className="mt-3">
        <Row className="m-0">
        <Form.Group as={Col} className="mb-3 col-6" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={22} className="custom-textarea" placeholder="Start typing your code here..."/>
        </Form.Group>

        <Form.Group as={Col} className="mb-3 col-6" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={18} className="custom-textarea"/>
        </Form.Group>

        <Form.Group as={Col} className="mb-3 col-6 position-absolute bottom-0 end-0" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={8} className="custom-textarea" placeholder="Error / Explain"/>
        </Form.Group>
        </Row>
      </Form>
    </div>
  );
}
