import express from 'express';
import {detailPageCall} from "./controller";
import {reviewInsertCall} from "./controller";
import {productLikeChangeCall, reviewLikeChangCall} from "./controller";

let router = express.Router();

router.get('/:productName', (req, res) => {
    let productName = req.params.productName;
    detailPageCall(req,res,productName);
});

router.post('/addReview/:productID', (req, res) => {
    reviewInsertCall(req,res);
});

router.post('/likeCount/:formType/:formID', (req, res) => {
    if(req.params.formType === 'product') {
        productLikeChangeCall(req, res);
    } else if (req.params.formID === 'review') {
        reviewLikeChangeCall(req, res);
    }
});

module.exports = router;