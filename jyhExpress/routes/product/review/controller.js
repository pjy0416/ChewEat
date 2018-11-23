import {nutritionQuery, reviewQuery} from "../../../database/search/query";
import {productQuery, productKcalQuery, getCategoies} from "../../../database/search/query";
import {reviewInsertQuery} from "../../../database/search/query";
import {productLikeChange, reviewLikeChange} from "../../../database/search/query";

export const detailPageCall = async(req,res,param) => {
    let nutSql = await nutritionQuery(param);
    let comSql = await reviewQuery(param);

    let result = {"nutrition" : nutSql, "review" : comSql};

    res.send(result);
};

export const productQueryCall = async(req, res) => {
    let productID = req.body.productID;
    let productSql = await productQuery(productID);         // detail page 설명 부분
    let length = productSql.length;

    if(length === 0){
        res.send(404,{message:"fail"});
    } else{
        let kcalSql = await productKcalQuery(productID);        // detail page 총 중량, 개당 중량, 중량당 kcal
        let categorySql = await getCategoies(productID);        // categoryID 로부터 depth 가져오기

        let measure = makeMeasuer(categorySql[0].depthOne, categorySql[0].depthTwo, kcalSql);

        let result = {'product' :productSql[0], 'ingest': measure};
        res.send(200, result);
    }
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
    let isLike = req.body.likeCount;        // like +- 여부 변수

    let execQuery = await productLikeChange(productID, isLike);

    if(execQuery === true){
        res.send(200,{message:"success"});
    } else{
        res.send(404,{message:"fail"});
    }
};

export const reviewLikeChangeCall = async(req, res) => {
    let reviewID = req.body.reviewID;   // 넘어오는거에 따라 다르게 받기
    let isLike = req.body.likeCount;        // like +- 여부 변수
    let execQuery = await reviewLikeChange(reviewID, isLike);
    if(execQuery === true){
        res.send(200,{message:"success"});
    } else{
        res.send(404,{message:"fail"});
    }
};

const makeMeasuer = (depthOne, depthTwo, param) => {
    console.log(depthOne);
    console.log(depthTwo);
    if(depthOne === 'Drink' || depthTwo === 'Milk') {
        let result = { "overallWeight" : param[0].overallWeight +'ml', "perWeight" : param[0].perWeight + 'ml', "kcal" : param[0].kcal + 'ml'};
        return result;
    } else {
        let result = { "overallWeight" : param[0].overallWeight +'g', "perWeight" : param[0].perWeight +'g', "kcal" : param[0].kcal +'g'};
        return result;
    }
};