const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createNewUser = async (req, res) => {
  try{
    const {fullName, email, password, passwordConfirmation, countryOrigin, atomicButton} = req.body;
    const lowerCaseEmail = email.toLowerCase(); 
    if(!(fullName && lowerCaseEmail && password && passwordConfirmation && countryOrigin && atomicButton != null)) {
      return res.status(400).json({"message": "All input is required"});
    }

    const userExist = await User.findOne({ email: lowerCaseEmail });
    if(userExist) {
      return res.status(422).json({"message": "User already exists"});
    }

    if(password !== passwordConfirmation){
      return res.status(422).json({"message": "Passwords are not the same"});
    }

    if(validatePassword(password)<3) {
      return res.status(422).json({"message": "Password is too weak min. 6 letters, including 1 number and 1 special character"});
    }

    encryptedPassword = bcrypt.hashSync(password, 10);

    const newUser = await User.create({
      fullName,
      email: lowerCaseEmail,
      password: encryptedPassword,
      countryOrigin,
      atomicButton
    });
    
    const token = jwt.sign({id: newUser._id, email: lowerCaseEmail}, process.env.TOKEN_KEY, {expiresIn: '2h'});

    res.status(201).json({ _id: newUser._id, fullName: newUser.fullName, email: newUser.email, token: token });
  } catch(err) {
    console.error(err);
  }
}

function validatePassword(password) {
  let strength = 0;
  if (/(?=(.*[0-9]){1,})/g.test(password)) {
    strength += 1;
  }
  if (/(?=(.*[!@#$%^&*()\-_+.]){1,})/g.test(password)) {
    strength += 1;
  }
  if (/.{8,}/g.test(password)) {
    strength += 1;
  }
  return strength;
}

module.exports = { createNewUser };
