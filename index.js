// index.js

// index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Book = require('./models/book');
const PORT = process.env.PORT || 3030;
const dotenv = require('dotenv');
dotenv.config()

const app = express();



// Establish a database connection using async/await and try...catch
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1); // Exit the application if the connection fails
  }
};

connectToDatabase(); // Call the function to establish the database connection

app.use(bodyParser.json());

// ... Your routes (GET, POST, PUT, DELETE) here

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});


// Get all books
app.get('/books', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Get a specific book by ID
app.get('/books/:id', async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Create a new book
app.post('/books', async (req, res) => {
  const newBook = new Book(req.body);
  const savedBook = await newBook.save();
  res.status(201).json(savedBook);
});

// Update a book
app.put('/books/:id', async (req, res) => {
  const updatedBook = req.body;
  const book = await Book.findByIdAndUpdate(req.params.id, updatedBook, { new: true });
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Delete a book
app.delete('/books/:id', async (req, res) => {
  const book = await Book.findByIdAndRemove(req.params.id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
