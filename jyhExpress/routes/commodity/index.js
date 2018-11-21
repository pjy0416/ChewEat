import express from 'express';
import {depthTwo, depthOne} from './controller';

let router = express.Router();

router.get('/:category', depthOne);
router.get('/product/:item', depthTwo);

module.exports = router;