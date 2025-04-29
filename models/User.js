// models/User.js
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Define the User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  role: {
    type: String,
    enum: ["renter", "owner"], // Specify roles, renter and owner
    default: "renter",
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Password hashing middleware to encrypt the password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    return next(error);
  }
});

// Method to compare entered password with hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Export the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
