const posts = [
    {
        name: "Cooper"
    },
    {
        name: "Rakesh"
    }
]

// @desc get goals
// @route GET /api/goals
// @access private 
export const getGoals = (req,res) => {
    res.status(200).json(posts)
}

// @desc set goals
// @route POST /api/goals
// @access private 
export const setGoals = (req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')    
    }
    
    res.status(200).json(posts)
}

// @desc update goals
// @route PUT /api/goals/:id
// @access private 
export const updateGoals = (req,res) => {
    res.status(200).json(posts)
}

// @desc remove goals
// @route DELETE /api/goals
// @access private 
export const removeGoals = (req,res) => {
    res.status(200).json(posts)
}


// export default {getGoals,setGoals, updateGoals, removeGoals}