import express from 'express';
import {product} from './controller';

let router = express.Router();

router.get('/:category', product);

module.exports = router;