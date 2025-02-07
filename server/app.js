const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const bookRoute = require('./routes/booksRoutes')
require('./connection/conn')
app.use(express.json());
app.use('/api/v1', bookRoute);

app.listen(1000, () => {
  console.log('SERVER STARTED SUCCESSFULLY');
});