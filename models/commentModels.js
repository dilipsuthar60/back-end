const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Post",
    },
    user: {
        type: String,
        require:true
    },
    boby: {
        type: String,
        require:true,
    }
}) 
module.exports=mongoose.model("Comment",commentSchema) 