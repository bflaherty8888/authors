import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthorForm from "../components/AuthorForm";

const NewAuthor = (props) => {
    const history = useHistory();
    const [errors, setErrors] = useState([]);

    const createAuthor = (author) => {
        axios.post("http://localhost:8000/api/authors/new", author)
            .then(response => history.push("/"))
            .catch(err => {
                setErrors(Object.keys(err.response.data.errors).map(k => err.response.data.errors[k]));
            });
    }

    return (
        <>
            <Link to={'/'}>Home</Link>
            <h4>Add a new author:</h4>
            <AuthorForm defaultName="" submitHandler={createAuthor} errors={errors} />
        </>
    );
}

export default NewAuthor;