const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('firebase-admin');
require('dotenv').config(); // Add this line

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  }),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

const db = admin.database();

app.post('/add-data', (req, res) => {
  const { key, value } = req.body;
  db.ref(`data/${key}`).set(value)
    .then(() => {
      res.status(200).send('Data stored successfully');
    })
    .catch((error) => {
      res.status(500).send(`Error storing data: ${error}`);
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
