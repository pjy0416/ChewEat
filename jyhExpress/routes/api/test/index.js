import express from 'express';
import {connectCall,transactionCall} from './controller.js';
import {testQueryCall} from "./controller";
import {productAllQueryCall, productTasteQueryCall} from "./controller"; // First Depth
import {nutritionQueryCall, commentQueryCall, commentUpdateQueryCall, commentInsertQueryCall} from "./controller"; // Second Depth


let router = express.Router();

router.get('/con',connectCall);
router.get('/trans', transactionCall);
router.get('/query', testQueryCall);
router.get('/query2', productAllQueryCall);
router.get('/query3', productTasteQueryCall);
router.get('/query4', nutritionQueryCall);
router.get('/query5', commentQueryCall);
router.get('/query6', commentUpdateQueryCall);
router.get('/query7', commentInsertQueryCall);

module.exports = router;
