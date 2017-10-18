var Employee = require('../models/Employee');

module.exports = {
    find: function(params, callback) {
        Employee.find(params, function(err, employees) {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, employees);
        })
    },

    findById: function(params, callback) {
        Employee.findById(params, (err, employees) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, employees);
        });
    },

    create: function(params, callback) {
        Employee.create(params, (err, employee) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, employee);
        });
    },

    update: function(id, params, callback) {
        Employee.findByIdAndUpdate(id, params, {new:true}, (err, employee) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, employee);
        })
    },

    destroy: function(id, callback) {
        Employee.findByIdAndRemove(id, (err)=> {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, id);
        })
    }

}