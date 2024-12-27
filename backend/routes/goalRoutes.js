import express from "express"
import { getGoals,setGoals, updateGoals, removeGoals } from "../controllers/goalController.js"
const router = express.Router()




router.get('/', getGoals)

router.post('/',setGoals)

router.put('/:id',updateGoals)

router.delete('/:id',removeGoals)

export default router