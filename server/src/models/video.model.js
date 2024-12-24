import mongoose, { Schema } from "mongoose"
const videoSchema = new Schema({
        videoFile : {
            type : String, //cloudinery url
            required : true
        },
        thumbnail : {
            type : String, //cloudinery url
            required : true
        },
        thumbnail : {
            type : String, //cloudinery url
            required : true
        },
        thumbnail : {
            type : String, //cloudinery url
            required : true
        },
    }
)

export const Video = mongoose.model("Video", videoSchema)