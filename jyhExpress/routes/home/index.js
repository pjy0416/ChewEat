import express from 'express';
import {home} from './controller';
import commodity from '../commodity';
import community from '../community';

let router = express.Router();

router.get('/', home);
router.get('/home', home);
router.use('/commodity', commodity);
router.use('/community', community);

module.exports = router;