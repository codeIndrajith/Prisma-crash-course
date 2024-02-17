const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res, next) => {
  res.send('Prisma tutorial with mysql and node');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
