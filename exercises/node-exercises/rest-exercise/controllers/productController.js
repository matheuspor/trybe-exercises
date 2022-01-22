const { getAll, add, getById, exclude, update } = require('../models/productModel');

const product = require('express').Router();

product.post('/', async (req, res) => {
  const { name, brand } = req.body;

  if (!name || !brand) return res.status(400).send({ code: 'Not Found', message: 'Nome e marca são obrigatórios' });

  const product = await add(name, brand);

  res.status(200).json(product);
});

product.get('/', async (req, res) => {
  const products = await getAll();

  res.status(200).json(products);
});

product.get('/:id', async (req, res) => {
  const { id } = req.params;

  const product = await getById(id);

  res.status(200).json(product);
});

product.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brand } = req.body;

  const product = await update(id, name, brand);

  res.status(200).json(product);
});

product.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const product = await exclude(id);

  res.status(204).json(product);
});

module.exports = product;