const User = require('../model/User');

const getTanks = async(req, res) => {
  const userId = req.user.id;
  try {
    const user = await User.findOne({ _id: userId }).populate('tanks');
    const tanks = user.tanks;
    console.log(tanks);
    res.status(200).json(tanks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to get tanks' });
  }
};

module.exports = { getTanks };
