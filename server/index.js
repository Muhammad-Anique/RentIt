const express = require('express');
const cors = require('cors');
const userRoutes = require('./Routes/userRoutes');
const itemRoutes = require('./Routes/itemRoutes');

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use('/', userRoutes);
app.use('/item', itemRoutes)

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
