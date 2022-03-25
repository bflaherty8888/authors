import React, { useEffect, useState } from "react";
import axios from 'axios';
import Table from "react-bootstrap/Table"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import { Link } from "react-router-dom";
import DeleteAuthorButton from "./DeleteAuthorButton";

const AuthorTable = (props) => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        let isMounted = true;
        axios.get("http://localhost:8000/api/authors")
            .then(response => {
                if (isMounted) setAuthors(response.data.results);
            })
            .catch(err => console.error(err));

        return () => { isMounted = false };
    });

    const removeFromDom = (index) => {
        setAuthors([...authors.slice(0, index), ...authors.slice(index + 1)]);
    }

    return (
        <Table bordered striped className="p-3 m-2 align-middle">
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {authors.map((author, index) => {
                    return (
                        <tr key={index}>
                            <td>{author.name}</td>
                            <td>
                                <ButtonGroup>
                                    <Link to={'/edit/' + author._id} className="btn btn-warning">Edit</Link>
                                    <DeleteAuthorButton authorId={author._id} successHandler={() => removeFromDom(index)} />
                                </ButtonGroup>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}

export default AuthorTable;