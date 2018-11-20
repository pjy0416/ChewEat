import express from 'express';
//import {detailQueryCall} from "./controller";
import {nutritionQueryCall} from "./controller";

let router = express.Router();

router.get('/:productID', (req, res) => {
    let productID = req.params.productID;
  //  detailQueryCall(req, res, productID);
    nutritionQueryCall(req,res,productID);
});

module.exports = router;