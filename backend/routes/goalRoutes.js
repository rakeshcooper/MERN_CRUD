import express from "express"
import { 
    getGoals,
    setGoals, 
    updateGoals, 
    removeGoals } from "../controllers/goalController.js"
const router = express.Router()

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(updateGoals).delete(removeGoals)

export default router