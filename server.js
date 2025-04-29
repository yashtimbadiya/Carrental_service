const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const carsRoute = require("./routes/cars");
const bikeRoute = require("./routes/bikes");
const userRoutes = require("./routes/users");


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error(err));

// Use the car routes
app.use("/cars", carsRoute); 
app.use("/bikes", bikeRoute); 

// Use the user routes
app.use("/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
