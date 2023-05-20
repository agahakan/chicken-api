const Chicken = require('../models/chickenModel');

// Middleware to get a chicken by ID
const getChickenByIdMiddleware = async (req, res, next) => {
  try {
    const chicken = await Chicken.findById(req.params.id);
    if (chicken == null) {
      return res.status(404).json({ message: 'Chicken not found' });
    }
    res.chicken = chicken;
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getChickenByIdMiddleware,
};
