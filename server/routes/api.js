import express from 'express';
import EmployeeController from '../../controllers/EmployeeController';

var router = express.Router();

router.get('/:resource', (req, res, next) => {
    var resource = req.params.resource;

    if (resource == 'employee') {
        
    }
    res.json({
        confirmation: 'SUCCESS',
        resource: resource
    });
});

module.exports = router;