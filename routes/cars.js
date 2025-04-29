const express = require("express");
const router = express.Router();
const Car = require("../models/Car");

// POST /api/cars - Add a new car
router.post("/", async (req, res) => {
  const { ownerName,
    type,
    model,
    perHourCharge,
    location,
    phoneNumber,
    isAvailable} = req.body;

  try {
    const newCar = new Car({
      ownerName,
      type,
      model,
      perHourCharge,
      location,
      phoneNumber,
      isAvailable,
    });

    await newCar.save();
    res.status(201).json(newCar);
  } catch (error) {
    res.status(400).json({ message: "Error adding car", error });
  }
});

// GET /api/cars - Get all available cars
router.get("/", async (req, res) => {
  try {
    const cars = await Car.find({ isAvailable: true });
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cars", error });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const carId = req.params.id;

    // Find the car by ID
    const car = await Car.findById(carId);

    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    // Send car details as JSON response
    res.json(car);
  } catch (error) {
    console.error('Error fetching car by ID:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
