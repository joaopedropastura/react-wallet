const mongoose = require('mongoose')

const newUser  = mongoose.model('users', {
    name: String,
    email: String, 
    password: String 
})

module.exports = user