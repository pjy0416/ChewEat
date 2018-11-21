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
//    if() {
//      데이터베이스에 들어가면
//      response 200, 아니면 404
//  }
});


module.exports = router;