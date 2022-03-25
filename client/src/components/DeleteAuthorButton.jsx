import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";

const DeleteAuthorButton = (props) => {
    const deleteAuthor = (e) => {
        axios.delete("http://localhost:8000/api/authors/" + props.authorId + "/delete")
            .then(response => props.successHandler())
            .catch(err => console.error(err));
    }

    return (
        <Button type="button" variant="danger" onClick={deleteAuthor}>Delete</Button>
    );
}

export default DeleteAuthorButton;