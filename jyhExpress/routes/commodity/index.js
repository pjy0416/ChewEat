import express from 'express';
import {product} from './controller';

let router = express.Router();

router.get('/:category', product);
router.get('/product/:item', product);

module.exports = router;