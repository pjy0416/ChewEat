import express from 'express';
import {detailPageCall, productQueryCall} from "./controller";
import {reviewInsertCall} from "./controller";
import {productLikeChangeCall, reviewLikeChangeCall} from "./controller";

let router = express.Router();

router.get('/:productName', (req, res) => {
    let productName = req.params.productName;
    detailPageCall(req,res,productName);
});

router.post('/addReview/:productID', (req, res) => {
    reviewInsertCall(req,res);
});

router.post('/:productName/:productID', (req, res) => {
    if(req.params.productName !== 'addReview') {
        productQueryCall(req, res);
    }
});

router.post('/likeCount/:formType/:formID', (req, res) => {
    if(req.params.formType === 'product') {
        productLikeChangeCall(req, res);
    } else if (req.params.formType === 'review') {
        reviewLikeChangeCall(req, res);
    }
});

module.exports = router;