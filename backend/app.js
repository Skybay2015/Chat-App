const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const cors = require('cors');
const PORT = process.env.PORT;
const registrationRouter = require('./routers/registrationRouter');

app.use(express.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', registrationRouter);
const mongodb_uri = process.env.MongoDB;

mongoose
   .connect(mongodb_uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
   })
   .then(() => {
      app.listen(PORT, () => console.log(`Server has started on ${PORT}`));
   })
   .catch((error) => console.log(error));
