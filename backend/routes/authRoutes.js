const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/signup', async (req, res) => {
  try {
    const { email, username, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send("User already exists!");
    }

    user = new User({ email, username, password });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    res.status(201).send("User created successfully!", email, password);
  } catch(error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});


router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send("Invalid credentials");
    }

    // jwt token gen
    const payload = {
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
      }
    };

    // TODO: secret key da stvarno bude secret, randomly generated string neki
    jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch(error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
