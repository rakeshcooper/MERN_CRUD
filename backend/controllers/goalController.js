import asyncHandler from "express-async-handler"
import Goal from "../model/goalModel.js"
import User from "../model/userModel.js"


// @desc get goals
// @route GET /api/goals
// @access private 
export const getGoals = asyncHandler(async(req,res) => {
    const goals = await Goal.find({ user: req.user.id })
    res.status(200).json(goals)
})

// @desc set goals
// @route POST /api/goals
// @access private 
export const setGoals = asyncHandler(async(req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')    
    }
    
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json(goal)
})

// @desc update goals
// @route PUT /api/goals/:id
// @access private 
export const updateGoals = asyncHandler(async(req,res) => {
     const goal = await Goal.findById(req.params.id)
     
     if(!goal){
        res.status(400)
        throw new Error('Goal not found')    
    }

    const user = await User.findById(req.user.id)
    // check for user
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure logged in user matches the goal user
    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedGoal)
})

// @desc remove goals
// @route DELETE /api/goals
// @access private 
export const removeGoals = asyncHandler(async(req,res) => {
     const goal = await Goal.findById(req.params.id)
     
     if(!goal){
        res.status(400)
        throw new Error('Goal not found')    
    }

        const user = await User.findById(req.user.id)
    // check for user
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure logged in user matches the goal user
    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    const deletedGoal = await Goal.findByIdAndDelete(req.params.id)
    // await goal.remove()
    res.status(200).json({ id: req.params.id })
})


// export default {getGoals,setGoals, updateGoals, removeGoals}