import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [
            3,
            "Author's name must be at least 3 characters."
        ],
        required: [
            true,
            "Author's name is required."
        ]
    }
});

const Author = mongoose.model("Author", AuthorSchema);

export default Author;