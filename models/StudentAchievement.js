const pool = require('../config/db');

const StudentAchievement = {
  async findByStudentId(student_id) {
    const { rows } = await pool.query('SELECT * FROM student_achievements WHERE student_id = $1', [student_id]);
    return rows;
  },
};

module.exports = StudentAchievement;