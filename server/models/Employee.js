import mongoose from 'mongoose';

var EmployeeSchema = mongoose.Schema({
    first_name: {type:String, default:''},
    last_name: {type:String, default:''},
    email: {type:String, default:''},
    address: {type:String, default:''}
});

module.exports = mongoose.model('EmployeeSchema', EmployeeSchema);