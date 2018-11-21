import {nutritionQuery} from "../../../database/search/query";
import {reviewQuery} from "../../../database/search/query";
import {reviewInsertQuery} from "../../../database/search/query";

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