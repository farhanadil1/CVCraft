import { Resume } from '../models/resume.models.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';

// Create new resume
const createResume = asyncHandler(async (req, res) => {
  const { resumeName, templateId, formData } = req.body;
  const userId = req.user._id; 

  if (!resumeName || !templateId || !formData) {
    throw new ApiError(400, 'Data is missing.')
  }

  const newResume = await Resume.create({
    userId,
    resumeName,
    templateId,
    formData,
  })

  res
  .status(201)
  .json(
    new ApiResponse(201, newResume, 'Resume saved successfully')
    )
})

// Get all resumes of logged-in user
const getUserResumes = asyncHandler(async (req, res) => {
  const userId = req.user._id

  const resumes = await Resume.find({ userId }).sort({ updatedAt: -1 })
  res
  .status(200)
  .json(
    new ApiResponse(200, resumes, 'User resumes fetched successfully')
)
})

// Get resume by ID if it belongs to user
const getResumeById = asyncHandler(async (req, res) => {
  const userId = req.user._id

  const resume = await Resume.findOne({ _id: req.params.id, userId })
  if (!resume) {
    throw new ApiError(404, 'Resume not found for the ID or does not belong to you');
  }

  res
  .status(200)
  .json(
    new ApiResponse(200, resume, 'Resume fetched successfully')
    )
})

// Update resume if it belongs to user
const updateResume = asyncHandler(async (req, res) => {
  const userId = req.user._id

  const updated = await Resume.findOneAndUpdate(
    { _id: req.params.id, userId },
    req.body,
    { new: true }
  )

  if (!updated) {
    throw new ApiError(404, 'Resume not found or not authorized')
  }

  res
  .status(200)
  .json(
    new ApiResponse(200, updated, 'Resume updated successfully')
    )
})

// Delete resume if it belongs to user
const deleteResume = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const deleted = await Resume.findOneAndDelete({ _id: req.params.id, userId })
  if (!deleted) {
    throw new ApiError(404, 'Resume not found or not authorized')
  }

  res
  .status(200)
  .json(
    new ApiResponse(200, {}, 'Resume deleted successfully')
    )
})

export {
  createResume,
  getUserResumes,
  getResumeById,
  updateResume,
  deleteResume
};
