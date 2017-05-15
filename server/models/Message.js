var mongoose = require('mongoose');
var validators = require('mongoose-validators')
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    name: {type: String, required: "Please leave your name"},
    phone: {type: String, required: "Please leave your phone number"},
    email: {type: String, required: "Please leave your email"},
    content: {type: String, required: "You must provide a message"},
}, {timestamps: true})

mongoose.model('Message', MessageSchema);
