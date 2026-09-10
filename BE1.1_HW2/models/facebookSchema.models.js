const mongoose = require("mongoose")

const facebookSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    isBlueTick: {
        type: Boolean,
        default: false,
        required: true

    },
    createPostDate: {
        type: Date,
        required: true
    },
    postText: {
        type: String
    },
    postImg:{
        type:String
    },
    likes: {
        type: Number,
        default: 0
    },
    comments:{
        type:Number,
        default: 0
    },
    shares:{
        type:Numeber,
        default:0
    }
},
{
    timestamps: true
})

const Post = mongoose.model("Post", facebookSchema)

module.exports = Post