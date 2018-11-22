import {searchAll} from "../../database/search/query";

export const searchAllCall = async(req, res, param) => {
    let startSql = await searchAll(param);

    res.send(startSql);
};