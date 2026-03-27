const express = require('express');
const path = require('path');

const app = express();

// Health endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Serve React build folder
app.use(express.static(path.join(__dirname, 'build')));

// Catch-all to serve index.html for React routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
