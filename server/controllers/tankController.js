const Tank = require('../model/Tank');
const User = require('../model/User');

const createTank = async(req, res) => {
  const tank = req.body;
  const userId = req.user.id;
  try {
    const newTank = await Tank.create({
      ...tank, user: userId
    });
    await User.updateOne(
      { _id: userId },
      { $push: { tanks: newTank._id } }
    );
    res.status(201).json(newTank);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to create tank' });
  }
};

const getTank = async(req, res) => {
  const userId = req.user.id;
  const id = req.params.id;
  const tank = req.body;
  console.log(userId, id);
  try {
    const user = await User.findOne({ _id: userId }).populate('tanks');
    console.log(user);
    const tank = user.tanks.find(t => t._id.toString() === id);
    console.log(tank);
    if (!tank) {
      return res.status(404).json({ message: 'Tank not found' });
    }
    res.status(200).json(tank);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to get tank' });
  }
};

const updateTank = async (req, res) => {
  const userId = req.user.id;
  const id = req.params.id;
  const tank = req.body;
  console.log(userId, id);
  try {
    const updatedTank = await Tank.findOneAndUpdate(
      { _id: id, user: userId },
      tank,
      { new: true }
    );
    if (!updatedTank) {
      return res.status(404).json({ message: 'Tank not found' });
    }
    res.status(200).json(updatedTank);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to update tank' });
  }
};

const deleteTank = async (req, res) => {
  const userId = req.user.id;
  const id = req.params.id;
  try {
    const deletedTank = await Tank.findOneAndDelete({ _id: id, user: userId });
    if (!deletedTank) {
      return res.status(404).json({ message: 'Tank not found' });
    }

    const user = await User.findOne({ _id: userId });
    user.tanks = user.tanks.filter(t => t.toString() !== id);
    await user.save();

    res.status(200).json(deletedTank._id);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to delete tank' });
  }
};



module.exports = { createTank, getTank, updateTank, deleteTank };