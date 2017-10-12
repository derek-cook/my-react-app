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

    findById: function() {

    },

    create: function() {

    },

    update: function() {

    },

    destroy: function() {

    }

}