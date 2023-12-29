const mongoose = require('mongoose');

const schema = mongoose.Schema({
    "organization" :{
        type: String,
        default: "SabaiCode Elearning API"
    },
    "date" :{
        type: Date,
        default: new Date(Date.now())
    },
    "version":{
        type: String,
        default: "1.0.0"
    }
});

const Default = mongoose.model("default", schema);
module.exports = Default;