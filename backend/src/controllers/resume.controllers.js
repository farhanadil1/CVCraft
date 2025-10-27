import { Resume } from '../models/resume.models.js'
import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import {ApiResponse} from '../utils/ApiResponse.js'

//Create new resume
const createResume = asyncHandler(async (req, res) => {

    const { resumeName, templateId, formData } = req.body;

    if (!resumeName || !templateId || !formData) {
      throw new ApiError(401,'Data is missing.')
    }

    const newResume = await Resume.create({
      resumeName,
      templateId,
      formData,
    });

    res
    .status(201)
    .json(
        new ApiResponse(201,newResume, 'Resume saved successfully')
    )
})

//Get all resumes
const getAllResumes = asyncHandler( async (req, res) => {
 
    const resumes = await Resume.find().sort({ updatedAt: -1 });
    res
    .status(200)
    .json(
        new ApiResponse(200, resumes, 'All Resumes Fetched Successfully')
    )

})

//Get resume by ID
const getResumeById =asyncHandler( async (req, res) => {
  
    const resume = await Resume.findById(req.params.id);
    if (!resume) {
      throw new ApiError(404, 'Resume not found for the Id')
    }
    res
    .status(200)
    .json(
        new ApiResponse(200, resume, 'Resume for the ID Fecthed')
    )

})

// Update resume
const updateResume = asyncHandler( async (req, res) => {
 
    const updated = await Resume.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!updated) {
      throw new ApiError(404, 'Resume not found')
    }
    res
    .status(200)
    .json(
        new ApiResponse(200, updated, 'Resume updated successfully')
    )
  
})

// Delete resume
const deleteResume = asyncHandler( async (req, res) => {
    const deleted = await Resume.findByIdAndDelete(req.params.id)
    if (!deleted) {
      throw new ApiError(404, 'Resume not found')
    }
    res
    .status(200)
    .json(
        new ApiResponse(200, {}, 'Resume deleted Sucessfully')
    )
 
})

export {
    createResume,
    getAllResumes,
    getResumeById,
    updateResume,
    deleteResume
}