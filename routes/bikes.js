const express = require("express");
const router = express.Router();
const Bike = require("../models/Bike");

// POST /api/bikes - Add a new bike
router.post("/", async (req, res) => {
  const { ownerName,
    type,
    model,
    perHourCharge,
    location,
    phoneNumber,
    isAvailable} = req.body;

  try {
    const newbike = new Bike ({
      ownerName,
      type,
      model,
      perHourCharge,
      location,
      phoneNumber,
      isAvailable,
    });

    await newbike.save();
    res.status(201).json(newbike);
  } catch (error) {
    res.status(400).json({ message: "Error adding bike", error });
  }
});

// GET /api/bikes - Get all available bikes
router.get("/", async (req, res) => {
  try {
    const bikes = await Bike.find({ isAvailable: true });
    res.json(bikes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bikes", error });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const bikeId = req.params.id;

    // Find the bike by ID
    const bike = await Bike.findById(bikeId);

    if (!bike) {
      return res.status(404).json({ message: 'bike not found' });
    }

    // Send bike details as JSON response
    res.json(bike);
  } catch (error) {
    console.error('Error fetching bike by ID:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
