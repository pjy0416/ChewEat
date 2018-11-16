import express from 'express';
import {community} from './controller';

let router = express.Router();

router.get('/', community);

module.exports = router;