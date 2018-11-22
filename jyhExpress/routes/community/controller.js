import {commentIncLikeQuery} from "../../database/search/query";

export const community= async (req, res, param) => {
    let startSql = await commentIncLikeQuery(param);

    res.send(startSql);
};
