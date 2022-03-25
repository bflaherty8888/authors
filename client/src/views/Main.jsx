import React from "react";
import { Link } from "react-router-dom";
import AuthorTable from "../components/AuthorTable";

const Main = (props) => {

    return (
        <>
            <Link to={'/new'}>Add an Author</Link>
            <h4>We have quotes by:</h4>
            <AuthorTable />
        </>
    );
}

export default Main;