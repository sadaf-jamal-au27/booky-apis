# Book Management RESTful API

A RESTful API for managing books using Node.js, Express, and MongoDB.

## API Endpoints and Usage

### Get all books

- **Endpoint**: `/books`
- **Method**: `GET`
- **Description**: Retrieve a list of all books.
- **Example**: `GET http://localhost:3000/books`

### Get a book by ID

- **Endpoint**: `/books/:id`
- **Method**: `GET`
- **Description**: Retrieve details of a specific book by its ID.
- **Example**: `GET http://localhost:3000/books/1`

### Create a new book

- **Endpoint**: `/books`
- **Method**: `POST`
- **Description**: Add a new book (title, author, summary).
- **Example**: `POST http://localhost:3000/books` with a JSON body.

```json
{
  "title": "New Book",
  "author": "Author Name",
  "summary": "A brief summary of the book."
}
##
Update a book
Endpoint: /books/:id
Method: PUT
Description: Update a book's details.
Example: PUT http://localhost:3000/books/1 with a JSON body for updates.
##
Delete a book
Endpoint: /books/:id
Method: DELETE
Description: Delete a book by its ID.
Example: DELETE http://localhost:3000/books/1

## clone the repository
git clone https://github.com/sadaf-jamal-au27/booky-apis
cd book-management-api
## install dependencies
npm install
## Create a .env file in the root directory and add your MongoDB connection URL:
MONGODB_URI=YOUR_MONGODB_CONNECTION_URL
## Start the server:
npm start
## The API will be available at http://localhost:4000