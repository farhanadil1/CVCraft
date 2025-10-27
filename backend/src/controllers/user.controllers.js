import { asyncHandler } from "../utils/asyncHandler.js"
import {User} from '../models/user.models.js'
import { ApiError } from "../utils/ApiError.js"
import {ApiResponse} from '../utils/ApiResponse.js'

const GenerateAcessAndRefreshToken = async (userId) => {
    try{
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})
        return {accessToken, refreshToken}
    }
    catch(error){
        throw new ApiError(500, 'Something went wrong!')
    }
}

const registerUser = asyncHandler ( async(req, res) => {
    const {email, fullName, password} = req.body
    if([email, fullName, password].some((field) => field?.trim() == '')){
        throw new ApiError(400, 'All fields are Required')
    }

    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    if(!passwordRegex.test(password)){
        throw new ApiError(400, 'Password must have 8 characters and contains atleast one special character.')
    }

    const userExists = await User.findOne({
        $or: [
            {email: email}
        ]
    })
    if(userExists){
        throw new ApiError(409, 'User already exists. Try to login')
    }

    const user = await User.create({
        email,
        fullName,
        password
    })

    const userCreated = await User.findById(user._id).select(
        '-password -refreshToken'
    )

    if(!userCreated){
        throw new ApiError(500, 'Something went wrong, Please try again later.')
    }

    return res
    .status(201)
    .json(
        new ApiResponse(201, userCreated, 'User registered successfully')
    )
})

const loginUser = asyncHandler ( async( req, res) => {
    const {email, password} = req.body
    if(!(email)){
        throw new ApiError(400, 'Email is Required.')
    }
    
    const user = await User.findOne({
        $or: [
            {email: email}
        ]
    })
    if(!user){
        throw new ApiError(404, 'User not found. Please register first.')
    }

    const isPasswordMatched = await user.comparePassword(password)
    if(!isPasswordMatched){
        throw new ApiError(401, 'Invalid Credentials')
    }

    const {accessToken, refreshToken} = await GenerateAcessAndRefreshToken(user._id)
    const userLoggedIn = await User.findById(user._id).select('-password -refreshToken')

    const options= {
        httpOnly: true, 
        secure: false,
        samesite: 'lax',
        path: '/'
    }

    return res
    .status(200)
    .cookie('accessToken', accessToken, options)
    .cookie('refreshToken', refreshToken, options)
    .json(
        new ApiResponse(200, 
            {
                user: userLoggedIn,
                accessToken,refreshToken
            },
            'User Logged in Successfully'
        )
    )
})

const logoutUser = asyncHandler( async(req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {refreshToken: null}
        },{
            new: true
        }
    )
    const options ={
        httpOnly: true,
        secure: false,
        samesite: 'lax',
        path: '/'
    }
    return res
    .status(200)
    .clearCookie('accessToken', options)
    .clearCookie('refreshToken', options)
    .clearCookie('username', options)
    .json(
        new ApiResponse(200,{}, 'User Logged Out Successfully')
    )
})


export {
    registerUser,
    loginUser,
    logoutUser,
}