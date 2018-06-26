const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema ({
    username: { type:String, trim:true, required:"Username is Required"},
    password: { 
        type:String, 
        trim: true, 
        required: "Password is Required",
        validate: [
            function(input) {
                return input.length >= 6;
            },
            "Password should be longer."
        ]
    },
    email: { type:String, unique: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"]},
    userCreated: { type:Date, default:vDate.now}
});

//create the model from the above schema, using mongoose model method
const User = mongoose.model("User", UserSchema);

//Export the User model
module.exports = User;