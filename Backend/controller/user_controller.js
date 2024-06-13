import User from "../Model/user_model.js";
import bcrypt from "bcrypt"

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    // Check if the user already exists
    if (user) {
      return res.status(400).json({ message: "You are already exist" });
    }
    const hashPassword=await bcrypt.hash(password,10)
    // Create a new user
    const userStoreData = new User({
      fullname: fullname,
      email:email,
      password:hashPassword
    });
    await userStoreData.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log("Error", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body; // Ensure correct spelling here

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid username and password" });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username and password" });
    }

    // If the user exists and the password matches, return the user data
    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        password: user.password, // Be cautious about returning the password
      },
    });
  } catch (error) {
    console.log("Error:" + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
