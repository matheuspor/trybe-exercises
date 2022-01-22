const connection = require('../connection');

module.exports = {
  getAll: async () => {
    const [rows] = await connection.execute('SELECT * FROM authors');
    return rows;
  },
  create: async (first_name, last_name) => {
    const [rows] = await connection.execute('INSERT INTO authors (first_name, last_name) VALUES (?, ?)', [first_name, last_name]);

    const result = {
      id: rows.insertId,
      first_name,
      last_name,
    }
    return result;
  },
  getById: async (id) => {
    const [rows] = await connection.execute('SELECT * FROM authors WHERE id = ?', [id]);
    return rows[0];
  },
  update: async (id, first_name, last_name) => {
    await connection.execute('UPDATE authors SET first_name = ?, last_name = ? WHERE id = ?', [first_name, last_name, id]);
    return { id, first_name, last_name };
  },
  remove: async (id) => {
    await connection.execute('DELETE FROM authors WHERE id = ?', [id]);
  }
};