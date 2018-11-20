import express from 'express';
import {product, depthOne} from './controller';

let router = express.Router();

router.get('/:category', depthOne);

router.get('/product/:item', (req,res) => {
    product(req, res, req.params.item);
});

module.exports = router;