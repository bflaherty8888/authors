import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import AuthorForm from "../components/AuthorForm";

const EditAuthor = (props) => {
    const { id } = useParams();
    const [author, setAuthor] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    useEffect(() => {
        let isMounted = true;
        axios.get("http://localhost:8000/api/authors/" + id)
            .then(response => {
                if (isMounted) {
                    setAuthor(response.data.author);
                    setLoaded(true);
                }
            })
            .catch(err => {
                if (isMounted) {
                    setNotFound(true);
                    console.error(err);
                }
            });

        return () => { isMounted = false };
    });

    const updateAuthor = (author) => {
        axios.put("http://localhost:8000/api/authors/" + id + "/update", author)
            .then(r => history.push('/'))
            .catch(err => {
                setErrors(Object.keys(err.response.data.errors).map(k => err.response.data.errors[k]));
            });
    }

    return (
        <>
            <Link to={'/'}>Home</Link>
            <h4>Edit this author</h4>
            {loaded && <AuthorForm defaultName={author.name} errors={errors} submitHandler={updateAuthor} />}
            {notFound && <h2>Something went wrong.  Try a different author, or add one yourself</h2>}
        </>
    );
}

export default EditAuthor;