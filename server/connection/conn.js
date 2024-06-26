const mongoose = require('mongoose');


mongoose
  .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mhkoxib.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => console.log('connect'))