import mongoose, { Schema } from 'mongoose';

const resumeSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', 
      required: true,
    },
    resumeName: {
      type: String,
      required: true,
    },
    templateId: {
      type: String,
      required: true,
    },
    formData: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

export const Resume = mongoose.model('Resume', resumeSchema);
