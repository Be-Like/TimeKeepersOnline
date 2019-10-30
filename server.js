const express = require('express');
const connectDb = require('./config/db');

const app = express();

// Connect Database
connectDb();

app.use(express.json({ extended: false }));

// Define routes
app.use('/api/register', require('./routes/api/register.js'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
