import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema(
    {
        username : {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            trim : true,
            index : true
        },
        email : {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            trim : true
        },
        fullname : {
            type : String,
            required : true,
            trim : true,
            index : true
        },
        avater : {
            type : String,  // cloudinary url
            required : true
        },
        coverImage : {
            type : String
        },
        watchHistory : {
            type : Schema.Types.ObjectId,
            ref : "video"
        },
        password : {
            type : String,
            required : [true, "Password is required"]
        },
        refreshToken : {
            type : String
        }
    },
    {
        timestamps : true
    }
)

export const User = mongoose.model("User", userSchema)