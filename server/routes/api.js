import express from 'express';
import controllers from '../controllers';

var router = express.Router();

router.get('/:resource', (req, res, next) => {
    var resource = req.params.resource;
    var controller = controllers[resource];

    if (controller == null) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid resource request: ' + resource
        });

        return;
    }

    controller.find(req.query, (err, results) => {
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
    });
});

router.get('/:resource/:id', (req, res, next) => {
    var resource = req.params.resource;
    var id = req.params.id;
    var controller = controllers[resource];
    
    if (controller == null) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid resource request: ' + resource
        });

        return;
    }

    controller.findById(id, (err, result) => {
        if (err) {
            res.json({
                confirmation: 'fail',
                message: 'not found'
            });
            return;
        }
        res.json({
            confirmation: 'success',
            result: result
        });
    })
});

router.post('/:resource', (req, res, next) => {
    var resource = req.params.resource;
    var controller = controllers[resource];
    
    if (controller == null) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid resource request: ' + resource
        });

        return;
    }

    controller.create(req.body, (err, result) => {
        if (err) {
            res.json({
                confirmation: 'fail',
                message: err
            });
            return;
        }

        res.json({
            confirmation: 'success',
            result: result,
            redirectURL: '/employees'
        });
    });
});

router.put('/:resource/:id', (req, res, next) => {
    var resource = req.params.resource;
    var id = req.params.id;
    var controller = controllers[resource];

    if (controller == null) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid resource request: ' + resource
        });

        return;
    }

    controller.update(id, req.body, (err, result) => {
        if (err) {
            res.json({
                confirmation: 'fail',
                message: err
            });
            return;
        }
        res.json({
            confirmation: 'success',
            result: result,
            redirectURL: '/employees'
        });
    })
});

router.delete('/:resource/:id', (req, res, next) => {
    var resource = req.params.resource;
    var id = req.params.id;
    var controller = controllers[resource];

    if (controller == null) {
        res.json({
            confirmation: 'fail',
            message: 'Invalid resource request: ' + resource
        });

        return;
    }

    controller.destroy(id, (err, result) => {
        if (err) {
            res.json({
                confirmation: 'fail',
                message: err
            });
            return;
        }

        res.json({
            confirmation: 'successful deletion',
            id: result
        });
    });
});

module.exports = router;
