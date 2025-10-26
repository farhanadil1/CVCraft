import {asyncHandler} from '../utils/asyncHandler.js'
import jwt from 'jsonwebtoken'
import {ApiError} from '../utils/ApiError.js'
import {User} from '../models/user.models.js'

export const verifyJWT = asyncHandler( async(req, res, next) => {
    try{
        console.log('Cookies', req.cookies)
        console.log('Authorizstion Header:', req.header('Authorization'))
        
        const token = req.cookies?.accessToken || req.header('Authorization')?.replace('Bearer', '')
        if(!token){
            throw new ApiError(401, 'Unauthorize request: No token provided')
        }

        const decodeToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        
        const user = await User.findById(decodeToken._id).select('-password -refreshToken')
        if(!user){
            throw new ApiError(401, 'User not found, Invalid Token')
        }
        req.user = user
        next()
    }
    catch(error){
        throw new ApiError(401, error?.message || 'Unauthorize request')
    }
})

