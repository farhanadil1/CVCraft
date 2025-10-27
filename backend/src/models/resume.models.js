import mongoose,{Schema} from 'mongoose'

const resumeSchema = new Schema(
  {
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
)

export const Resume = mongoose.model('Resume', resumeSchema)
