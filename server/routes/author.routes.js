import { createAuthor, deleteAuthor, findAllAuthors, findAuthorById, updateAuthor } from "../controllers/author.controller.js";

export default function AuthorRoutes(app){
    app.get("/api/authors", findAllAuthors);
    app.get("/api/authors/:id", findAuthorById);
    app.post("/api/authors/new", createAuthor);
    app.put("/api/authors/:id/update", updateAuthor);
    app.delete("/api/authors/:id/delete", deleteAuthor);
}