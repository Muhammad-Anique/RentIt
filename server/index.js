const express = require('express');
const cors = require('cors');
const userRoutes = require('./Routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', userRoutes);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
