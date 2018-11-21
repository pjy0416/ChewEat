import express from 'express';
import {detailPageCall} from "./controller";
import {reviewInsertCall} from "./controller";

let router = express.Router();

router.get('/:productName', (req, res) => {
    let productName = req.params.productName;
    detailPageCall(req,res,productName);
});

router.post('/addReview/:productID', (req, res) => {
    reviewInsertCall(req,res);
});

module.exports = router;