import express from "express"
const router = express.Router()
import { 
    getGoals,
    setGoals, 
    updateGoals, 
    removeGoals } from "../controllers/goalController.js"
import { protect } from "../middleware/authMiddleware.js"

router.route('/').get(protect, getGoals).post(protect, setGoals)
router.route('/:id').put(protect, updateGoals).delete(protect, removeGoals)

export default router