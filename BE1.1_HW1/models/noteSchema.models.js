const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },

    content:{
        type: String,
        enum: ['Personal', 'Work', 'Study', 'Ideas', 'Journal', 'Other']
    },
    tag:{
        type:[String],
    },
    
},
{
        timestamps: true
    }
)

const Note = mongoose.model("Note", noteSchema)

module.exports = Note