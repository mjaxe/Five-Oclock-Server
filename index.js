const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const zoneRoutes = require('./controllers/zoneController');

app.use(express.json());
app.use('/zones', zoneRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(cors({
  origin: 'http://localhost:4200'  // <-- Allow frontend
}));