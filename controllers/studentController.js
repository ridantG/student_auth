const StudentAchievement = require('../models/StudentAchievement');

const getAchievements = async (req, res) => {
  const { student_id } = req.params;
  const achievements = await StudentAchievement.findByStudentId(student_id);
  res.json(achievements);
};

module.exports = { getAchievements };