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
//router.use('/community', community);          // 커뮤니티는 나중에 개발..


module.exports = router;