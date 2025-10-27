import { Router } from "express"
import { verifyJWT } from "../middlewares/auth.middleware.js"
import { createResume, getAllResumes, getResumeById, 
updateResume, deleteResume } from "../controllers/resume.controllers.js"

const router = Router()

router.route('/create').post(verifyJWT, createResume)
router.route('/getall').get(verifyJWT, getAllResumes)
router.route('/get/:id').get(verifyJWT, getResumeById)
router.route('/update/:id').put(verifyJWT, updateResume)
router.route('/delete/:id').delete(verifyJWT, deleteResume)

export default router