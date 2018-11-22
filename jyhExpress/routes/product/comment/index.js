import express from 'express';
import {testCall} from "./controller";

let router = express.Router();

router.get('/:productID', (req, res) => {
    let productID = req.params.productID;
    testCall(req,res,productID);
});


module.exports = router;