const express = require('express');
const app = express();
const PORT = 5000;
app.get('/', (req,res) => {
  res.send('Hello express!😤');
});
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}!`);
});