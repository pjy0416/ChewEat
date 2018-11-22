import {detailQuery} from "../../../database/search/query";
import {nutritionQuery} from "../../../database/search/query";

export const detailQueryCall = async(req, res, param) => {
    let startSql = await detailQuery(param);

    res.send(startSql);
};

export const nutritionQueryCall = async(req, res, param) => {
    let startSql = await nutritionQuery(param);

    res.send(startSql);
};