import express from 'express';
import {home} from './controller';
import commodity from '../commodity';
import community from '../community';

let router = express.Router();

// root page
router.get('/', home);

// for refresh
router.get('/home', home);
router.use('/commodity', commodity);
router.use('/community', community);

module.exports = router;