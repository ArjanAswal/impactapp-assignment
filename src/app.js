const express = require('express');
require('./models/index');

const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});