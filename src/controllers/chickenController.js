const Chicken = require('../models/chickenModel');

// Get all chickens
const getAllChickens = async (req, res) => {
  try {
    const chickens = await Chicken.find();
    res.json(chickens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a chicken by ID
const getChickenById = async (req, res) => {
  res.json(res.chicken);
};

// Create a new chicken
const createChicken = async (req, res) => {
  const chicken = new Chicken(req.body);

  try {
    const newChicken = await chicken.save();
    res.status(201).json(newChicken);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a chicken steps by ID
const updateChickenStepsById = async (req, res) => {
    try {
        const chickenId = req.params.id;
        const chicken = await Chicken.findById(chickenId);
        chicken.steps += 1;
        await chicken.save();
        res.json(chicken);
      } catch (error) {
        res.status(500).json({ message: 'Failed to update chicken steps', error: error.message });
      }
};

// Update a chicken by ID
const updateChickenById = async (req, res) => {
  if (req.body.name != null) {
    res.chicken.name = req.body.name;
  }
  if (req.body.birthday != null) {
    res.chicken.birthday = req.body.birthday;
  }
  if (req.body.weight != null) {
    res.chicken.weight = req.body.weight;
  }
  if (req.body.steps != null) {
    res.chicken.steps = req.body.steps;
  }
  if (req.body.isRunning != null) {
    res.chicken.isRunning = req.body.isRunning;
  }

  try {
    const updatedChicken = await res.chicken.save();
    res.json(updatedChicken);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
    
// Delete a chicken by ID
const deleteChickenById = async (req, res) => {
  try {
    const deletedChicken = await Chicken.findByIdAndRemove(req.params.id);
    await Chicken.findByIdAndRemove(req.params.id);
    res.json({ message: 'Chicken deleted', deletedChicken});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllChickens,
  getChickenById,
  createChicken,
  updateChickenById,
  updateChickenStepsById,
  deleteChickenById,
};