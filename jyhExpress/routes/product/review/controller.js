import {nutritionQuery} from "../../../database/search/query";
import {reviewQuery} from "../../../database/search/query";
import {reviewInsertQuery} from "../../../database/search/query";
import {productLikeChange} from "../../../database/search/query";

export const detailPageCall = async(req,res,param) => {
    let nutSql = await nutritionQuery(param);
    let comSql = await reviewQuery(param);

    let result = {"nutrition" : nutSql, "review" : comSql};

    res.send(result);
};

export const reviewInsertCall = async(req, res) =>{
    let productID = req.body.productID;
    let review = req.body.review;
    let execQuery = await reviewInsertQuery(productID, review);

    if(execQuery === true){
        res.send(200,{message:"success"});
    } else{
        res.send(404,{message:"fail"});
    }
};

export const productLikeChangeCall = async(req, res) => {
    let productID = req.body.productID;   // 넘어오는거에 따라 다르게 받기
    let isLike = req.body.isLike;        // like +- 여부 변수

    let execQuery = await productLikeChange(productID, isLike);

    if(execQuery === true){
        res.send(200,{message:"success"});
    } else{
        res.send(404,{message:"fail"});
    }
};

export const reviewLikeChangeCall = async(req, res) => {
    let reviewID = req.body.reviewID;   // 넘어오는거에 따라 다르게 받기
    let isLike = req.body.isLike;        // like +- 여부 변수

    let execQuery = await reviewLikeChange(reviewID, isLike);

    if(execQuery === true){
        res.send(200,{message:"success"});
    } else{
        res.send(404,{message:"fail"});
    }
};
