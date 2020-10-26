
const mongoose =require ('mongoose');

const userSch = new mongoose.Schema({
    name:{

        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email:{

        type: String,
        required: true,
        min: 10,
        max: 255
    },
    password:{

        type: String,
        required: true,
        min: 6,
        max: 255
    },

    date:{
        type:Date,
        default: Date.now

    }


});