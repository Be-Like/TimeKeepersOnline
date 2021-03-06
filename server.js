const express = require('express');
const connectDb = require('./config/db');

const app = express();

// Connect Database
connectDb();

app.use(express.json({ extended: false }));

// Define routes
app.use('/api/register', require('./routes/api/register.js'));
app.use('/api/login', require('./routes/api/login.js'));
app.use('/api/jobs', require('./routes/api/jobs.js'));
app.use('/api/expenses', require('./routes/api/expenses.js'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
