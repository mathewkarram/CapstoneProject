const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000
mongoose.connect('mongodb://127.0.0.1:27017/babasCafe', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


let Subscriber = require('./models/subscriber');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.post('/signup', async (req, res) => {
  try {
    const { name, email } = req.body;
    
    const newSubscriber = new Subscriber({
      name,
      email,
    });

    await newSubscriber.save();
    
    res.status(201).json({ message: 'Subscriber added successfully' });
  } catch (error) {
    console.error('Error saving subscriber:', error);
    // Send an error response
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});