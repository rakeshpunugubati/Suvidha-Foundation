// index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { writeGoogle } = require('./googleAPI');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'https://suvidha-foundation-frontend.vercel.app', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(bodyParser.json());



// POST endpoint for the contact form
app.post('/contact', async (req, res) => {
  const {date, name, email, mobile, message } = req.body;
  
  const data = [date, name, email, mobile, message];
  // console.log(data);
  const spreadsheetId =process.env.CONTACT_FORM_SPREADSHEET_ID;

  try {
    await writeGoogle(data , spreadsheetId);
    res.json({ message: 'Submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to submit form' });
  }
});

// POST endpoint for the Internship form
app.post('/internship', async (req, res) => {
  const {date, name, email, mobile, college, qualification, domain, coverLetter } = req.body;
  const data = [date, name, email, mobile, college, qualification, domain, coverLetter];

  // console.log(data);
  const spreadsheetId = process.env.INTERNSHIP_FORM_SPREADSHEET_ID;
  try {
    await writeGoogle(data, spreadsheetId);
    res.json({ message: 'Submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error submitting form' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
