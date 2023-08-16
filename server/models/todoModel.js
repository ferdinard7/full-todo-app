const mongoose = require("mongoose");

const todoItemSchema = mongoose.Schema({
    item : {
        type: String,
        required: true
    }
}, {
    timestamps:true,
})


module.exports = mongoose.model("todo", todoItemSchema);