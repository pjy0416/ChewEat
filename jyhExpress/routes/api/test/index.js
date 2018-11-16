import express from 'express';
import {connectCall,transactionCall} from './controller.js';
import{testQueryCall} from "./controller";

let router = express.Router();

router.get('/con',connectCall);
router.get('/trans', transactionCall);
router.get('/query', testQueryCall);

module.exports = router;
