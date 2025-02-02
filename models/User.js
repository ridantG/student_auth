const pool = require('../config/db');

const User = {
  async findByEmail(email) {
    const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return rows[0];
  },
  async create(user) {
    const { name, email, password, role, linked_student_id } = user;
    const { rows } = await pool.query(
      'INSERT INTO users (name, email, password, role, linked_student_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, email, password, role, linked_student_id]
    );
    return rows[0];
  },
};

module.exports = User;