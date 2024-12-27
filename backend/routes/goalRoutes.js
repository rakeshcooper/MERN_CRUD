import express from "express"
const router = express.Router()

const posts = [
    {
        name: "Cooper"
    },
    {
        name: "Rakesh"
    }
]


router.get('/',(req,res) => {
    res.status(200).json(posts)

})

router.post('/',(req,res) => {
    res.status(200).json(posts)

})

router.put('/:id',(req,res) => {
    res.status(200).json(posts)
})

router.delete('/:id',(req,res) => {
    res.status(200).json(posts)

})

export default router