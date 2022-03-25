import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form"
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

const AuthorForm = (props) => {
    const [name, setName] = useState(props.defaultName);

    const submitHandler = (e) => {
        e.preventDefault();
        props.submitHandler({ name });
    }

    return (
        <Container className='my-3 border rounded px-3 py-2'>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" onChange={e => setName(e.target.value)} value={name} />
                </Form.Group>
                <Button variant="primary" type="submit" className="my-2">
                    Submit
                </Button>
                <Link to="/" className="btn btn-secondary mx-2">Cancel</Link>

                {props.errors.map((err, index) => {
                    return (
                        <Alert key={index} variant='danger'>
                            {err.message}
                        </Alert>
                    );
                })}
            </Form>
        </Container>
    );
}

export default AuthorForm;