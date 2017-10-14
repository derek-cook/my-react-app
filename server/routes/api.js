import express from 'express';
import EmployeeController from '../../controllers/EmployeeController';

var router = express.Router();

router.get('/:resource', (req, res, next) => {
    var resource = req.params.resource;

    if (resource == 'employee') {
        EmployeeController.find(req.query, (err, results) => {
            if (err) {
                res.json({
                    confirmation: 'fail',
                    message: err
                });
                return;
            }
            res.json({
                confirmation: 'successs',
                results: results
            });
        })
    }

});

module.exports = router;