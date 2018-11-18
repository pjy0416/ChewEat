import express from 'express';
import {productAllQueryCall, productTasteQueryCall} from "./controller"; // First Depth
import {nutritionQueryCall, commentQueryCall, commentUpdateQueryCall, commentInsertQueryCall} from "./controller"; // Second Depth

let router = express.Router();

router.get('/information',productAllQueryCall);
router.get('/query3', productTasteQueryCall);
router.get('/query4', nutritionQueryCall);
router.get('/query5', commentQueryCall);
router.get('/query6', commentUpdateQueryCall);
router.get('/query7', commentInsertQueryCall);

module.exports = router;
