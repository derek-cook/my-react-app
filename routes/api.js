import express from 'express';

var router = express.Router();

router.get('/:resource', () => {
    console.log(req.params);
    res.json({
        confirmation: 'success',
        resource: req.params.resource
    });
});

export default router;