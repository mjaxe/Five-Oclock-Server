const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const zoneRoutes = require('./controllers/zoneController');

app.use(cors({
  origin: ['http://localhost:4200', 'https://five-oclock-client.vercel.app'], // Add your deployed frontend here if needed
}));

app.use(express.json());
app.use('/zones', zoneRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

