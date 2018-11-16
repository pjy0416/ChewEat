import express from 'express';
import home from './home';

let router = express.Router();

router.use('/', home);

module.exports = router;