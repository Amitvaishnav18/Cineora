const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true,
        minlength: 3,
      maxlength: 50,
    },

    email:{
        type : String,
        required :true,
        unique : true
    },

    password : {
        type : String,
        required : true,
        minlength : 8
    },

    role : {
        type : String,
        enum : ["customer","admin","theatreOwner"],
        default : "customer"
    },

    isActive :{
        type : Boolean,
        default : true
    }
})

module.exports = mongoose.model("User", userSchema);