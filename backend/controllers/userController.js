// @desc Register new user
// @route POST /api/users
// @access public 

export const registerUser = (req,res) => {
    res.json({ message: 'Register User' })
}

// @desc Athenticate a user
// @route POST /api/users/login
// @access public 

export const loginUser = (req,res) => {
    res.json({ message: 'Login User' })
}

// @desc Get user data
// @route GET /api/users/me
// @access public 

export const getMe = (req,res) => {
    res.json({ message: 'User data display' })
}

