const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost/user-registration', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Create User Model
const User = mongoose.model('User', userSchema);

// Register Route
app.post('/register', async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  // Simple validation
  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).send('All fields are required.');
  }

  if (password !== confirmPassword) {
    return res.status(400).send('Passwords do not match.');
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).send('User registered successfully.');
  } catch (error) {
    res.status(500).send('Error registering user: ' + error.message);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});