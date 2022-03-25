import Author from '../models/author.model.js'

export function findAllAuthors(req, res) {
    Author.find()
        .then(authors => res.json({ count: authors.length, results: authors }))
        .catch(err => res.status(400).json(err));
}

export function findAuthorById(req, res) {
    Author.findById(req.params.id)
        .then(author => res.json({ author }))
        .catch(err => res.status(400).json(err));
}

export function createAuthor(req, res) {
    Author.create(req.body)
        .then(author => res.json({ author }))
        .catch(err => res.status(400).json(err));
}

export function updateAuthor(req, res) {
    Author.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(author => res.json({ author }))
        .catch(err => res.status(400).json(err));
}

export function deleteAuthor (req, res) {
    Author.findByIdAndDelete(req.params.id)
        .then(result => res.json({ result }))
        .catch(err => res.status(400).json(err));
}