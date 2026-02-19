const userModel = require("../model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//  Sign Up 

const signUp = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).send({
        status: false,
        message: "Please fill in all required fields: firstName, lastName, email, password",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).send({
        status: false,
        message: "Please provide a valid email address",
      });
    }

    if (password.length < 8) {
      return res.status(400).send({
        status: false,
        message: "Password must be at least 8 characters long",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();

    const existingUser = await userModel.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(409).send({
        status: false,
        message: "An account with this email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      firstName: trimmedFirstName,
      lastName: trimmedLastName,
      email: normalizedEmail,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id, email: newUser.email, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(201).send({
      status: true,
      message: "User registered successfully",
      token,
      data: {
        firstName: trimmedFirstName,
        lastName: trimmedLastName,
        email: normalizedEmail,
        role: newUser.role,
      },
    });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).send({
        status: false,
        message: "An account with this email already exists",
      });
    }
    console.error("Error during sign up:", err);
    return res.status(500).send({
      status: false,
      message: "Error registering user",
      error: err.message,
    });
  }
};

// Login

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({
        status: false,
        message: "Please provide both email and password",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await userModel.findOne({ email: normalizedEmail });
    if (!existingUser) {
      return res.status(401).send({
        status: false,
        message: "Invalid email or password",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      return res.status(401).send({
        status: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      { id: existingUser._id, email: existingUser.email, role: existingUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).send({
      status: true,
      message: "Login successful",
      token,
      data: {
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
        email: existingUser.email,
        role: existingUser.role,
      },
    });
  } catch (err) {
    console.error("Error during login:", err);
    return res.status(500).send({
      status: false,
      message: "Error logging in",
      error: err.message,
    });
  }
};


// Update user info
const updateUser = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    const token = req.headers.authorization?.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const updatedUser = await userModel.findByIdAndUpdate(
      decoded.id,
      { firstName, lastName, email },
      { new: true }
    );

    return res.status(200).send({
      status: true,
      message: "Profile updated successfully",
      data: {
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        email: updatedUser.email,
        role: updatedUser.role,
      },
    });
  } catch (err) {
    console.error("Error updating user:", err);
    return res.status(500).send({
      status: false,
      message: "Error updating profile",
      error: err.message,
    });
  }
};

module.exports = { signUp, login, updateUser };