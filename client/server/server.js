const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
const mongoose = require('mongoose');
const User = require('./model/User');

//require('./routes.js');

app.use(express.json());

mongoose.connect('mongodb+srv://brindha:sms123@sms.zvnungg.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));

// CREATE
app.post('/users', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.put('/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (!user) throw Error('User not found');

    Object.assign(user, req.body);

    await user.save();

    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const removedUser = await User.findByIdAndDelete(id);

    if (!removedUser) throw Error('User not found');

    res.json(removedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});