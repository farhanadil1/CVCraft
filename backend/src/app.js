import express, { json } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express ()

app.set('trust proxy', 1)
app.use(cors({
    origin: ['http://localhost:3000','https://cv-craftt.netlify.app'],
    credentials: true
}))

app.use(express.json({limit: '16kb'}))
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(cookieParser())

import userRouter from './routes/user.routes.js'
import resumeRouter from './routes/resume.routes.js'
app.use('/api/users', userRouter)
app.use('/api/resumes', resumeRouter)

import { errorHandler } from './middlewares/errorHandler.middleware.js'
app.use(errorHandler)

export {app}