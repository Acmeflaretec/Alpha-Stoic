const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Import the cors package
const connectDB = require('./config/db');
const eventRoutes = require('./routes/eventRoutes');
const path = require('path');

dotenv.config();

connectDB();
  
const app = express();
// app.use(cors({
//   origin: [process.env.CLIENT,process.env.ADMIN], 
//   credentials: true,
// }));
// Configure CORS
const corsOptions = {
  origin: [process.env.CLIENT,process.env.ADMIN],    
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

// Increase payload limit
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use('/', eventRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
