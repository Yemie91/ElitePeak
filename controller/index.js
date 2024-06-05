const express = require('express');
const path = require('path');
const connectDB = require('./model/connectDB');
const cors = require('cors');
const User = require('./model/dbSchema/users');


const app = express();
const port = 5000; // Port should be a number

// Serve static files from the 'view' directory

const staticfile = path.join(__dirname, '../view/dist')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(staticfile))
app.use(cors({
  origin: 'http://localhost:3000',
}))


connectDB()

app.post('/register', async (req, res) => {
  try {
    const { fullName, username, email, phoneNumber, password, Country } = req.body;

    console.log(req.body)

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({ fullName, username, email, phoneNumber, password, Country });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});


// Wildcard route to handle all other routes and serve index.html
app.get('*', (req, res) => {
  res.sendFile(staticfile, 'index.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
