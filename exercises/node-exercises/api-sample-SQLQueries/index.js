const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const fs = require('fs');
const mysql = require('mysql2');
const app = express();
const connection = require('./connection');
const { getAll, getById, create, remove, update } = require('./models/authorModel');

app.use(bodyParser.json());

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

app.get('/authors', rescue(async (req, res) => {
  const authors = await getAll();

  res.status(200).json(authors);
}));

app.post('/authors', rescue(async (req, res) => {
  const { first_name, last_name } = req.body;

  if (!first_name || !last_name) {
    return res
      .status(422)
      .json({ message: 'First name and last name are required' });
  }
  const newAuthor = await create(first_name, last_name);

  res.status(200).json(newAuthor);
}));

app.get('/authors/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const author = await getById(id)

  if (!author) {
    return res.status(404).json({ message: 'Author not found' });
  }

  res.status(200).json(author);
}));

app.delete('/authors/:id',
  rescue(async (req, res) => {
    const { id } = req.params;
    const author = await getById(id);

    if (!author) {
      return res.status(404).json({ message: 'Author not found' });
    }
    await remove(id);
    res.status(200).json({ message: 'Author deleted' });
  }));

app.put('/authors/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name } = req.body;


  if (!first_name && !last_name) {
    return res
      .status(422)
      .json({ message: 'First name or last name are required' });
  }

  const author = await getById(id);

  if (!author) {
    return res.status(404).json({ message: 'Author not found' });
  }

  const updatedAuthor = await update(id, first_name, last_name);

  res.status(200).json(updatedAuthor);
}));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Something went wrong' });
});
