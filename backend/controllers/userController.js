import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import asyncHandler from "express-async-handler"
import User from "../model/userModel.js"

// @desc Register new user
// @route POST /api/users
// @access public 

export const registerUser = asyncHandler(async(req,res) => {
    const { name, email, password } = req.body
    
    if( !name || !email || !password ){
        res.status(400)
        throw new Error('Please add all fields')
    }

    // check if user exists
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedpassword = await bcrypt.hash(password, salt)
    
    // create user
    const user = await User.create({
        name,
        email,
        password:hashedpassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }
})

// @desc Athenticate a user
// @route POST /api/users/login
// @access public 

export const loginUser = asyncHandler(async(req,res) => {
    const { email, password } = req.body
    
    // check for user email
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: await generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid crendentials')
    }
    res.json({ message: 'Login User' })
})

// @desc Get user data
// @route GET /api/users/me
// @access Private

export const getMe = asyncHandler(async(req,res) => {
    const { _id, name, email } = await User.findById(req.user.id)
    res.json({ 
        id: _id,
        name,
        email,
     })
     console.log(_id, name, email);
     
})


// Generate JWT
const generateToken = async(id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

