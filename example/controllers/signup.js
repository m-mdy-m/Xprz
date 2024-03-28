/**
 * Controller functions for user signup functionality.
 * This module includes functions to render the signup page and handle form submission securely.
 */

// Import necessary packages and modules
const { bcryptjs } = require("xprz").Package();
const path = require("path");
const generateAuthToken = $read("utils/generateAuthToken");
const User = $read("model/User");

/**
 * Controller function to render the signup page.
 * @param {Object} req - The request object.
 * @param {Function} sendFile - Function to send a file as response.
 */
exports.getSignupPage = (req, { sendFile }) => {
  // Send the signup page to the client
  sendFile(path.join(process.cwd(), "/public/signup.html"));
};

/**
 * Controller function to handle signup form submission securely.
 * This function hashes the password before storing it in the database to ensure security.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
exports.signupUser = async (req, res) => {
  const { getBody } = req;
  const { created, validationFailed, internalServerError } = res.getJsonHandler();
  
  try {
    // Extract user input from request body
    const { username, email, password } = getBody();
    
    // Define validation rules
    const rules = {
      username: "username",
      email: "email",
      password: "password",
      passwordConf: "same:password",
    };
    
    // Verify user input against defined rules
    const errors = req.verifyBody(rules);

    // If there are validation errors, respond with failure
    if (Object.keys(errors).length > 0) {
      validationFailed({ errors });
    }
    
    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });

    // If user already exists, respond with conflict error
    if (existingUser) {
      return res.status(409).json({
        success: false,
        error: "User already exists.",
      });
    } else {
      // Hash the password securely before storing it in the database
      const hashedPassword = await bcryptjs().hash(password, 10);

      // Create a new user with hashed password
      const newUser = await User.create({
        username: username,
        email: email,
        password: hashedPassword,
      });

      // Generate JWT token with user information
      const token = generateAuthToken(newUser);
      req.session.token = token;
      // Send success response
      return created({ token });
    }
  } catch (error) {
    // Handle other errors (e.g., database error)
    internalServerError(error.message);
  }
};
