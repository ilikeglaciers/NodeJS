const express = require('express');
const app = express();

// Serve static files (like HTML)
app.use(express.static('E:\NodeJS\index.html'));

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});