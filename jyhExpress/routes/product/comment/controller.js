import {nutritionQuery} from "../../../database/search/query";
import {commentQuery} from "../../../database/search/query";

export const testCall = async(req,res,param) => {
    let nutSql = await nutritionQuery(param);
    let comSql = await commentQuery(param);

    let result = {"nutrition" : nutSql, "review" : comSql};

    res.send(result);
};
