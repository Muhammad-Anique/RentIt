const pool = require('../dbConfig');
const userQueries = require('../userModule/userQueries'); // Adjust path if needed
const getAllUsers = (req, res) => {
  pool.query(userQueries.getAllUsersQuery, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Error fetching users' });
    } else {
      res.json(results);
    }
  });
};



const getUserById = (req, res) => {
  const userId = req.params.userId; // Get userId from URL params
  console.log(userId)
  pool.query(userQueries.getUserByIdQuery, [userId], (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Error fetching user' });
    } else {
      if (results.length === 0) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json(results[0]);
      }
    }
  });
};


const getUserByEmailAndPassword = (req, res) => {
  const { email, password } = req.body; // Get email and password from request body

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required in the request body' });
  }

  pool.query(userQueries.authenticateQuery, [email, password], (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Error fetching user' });
    } else {
      if (results.length === 0) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json(results[0]);
      }
    }
  });
};

function generateRandomNumber() {
  const min = 100000000; // Minimum 9-digit number (100,000,000)
  const max = 999999999; // Maximum 9-digit number (999,999,999)
  
  // Generate a random number between min and max (inclusive)
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  
  return randomNumber;
}

const registerUser = (req, res) => {
  const { email, password, cnic, dob, name,cnicImg, profileImg } = req.body; // Get email and password from request body

  console.log(cnicImg)
  console.log(profileImg)
  console.log(req.body)
  const id = generateRandomNumber(); // Assuming this is a predefined ID or generated elsewhere
  const formattedDate = new Date(dob).toISOString().split('T')[0];

  pool.query(
   userQueries.registerUser,
    [id, name, cnic, formattedDate, email, password,null,null,null,profileImg,cnicImg ],

    (error, results) => {
      if (error) {
        console.error('Error inserting user:', error); // Log the actual error
        res.status(500).json({ error: 'Error inserting user' });
      } else {
        res.json({ message: 'User inserted successfully' });
      }
    }
  );
};



module.exports = {
  getAllUsers,
  getUserById,
  registerUser,
  getUserByEmailAndPassword,
};
