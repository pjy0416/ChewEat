import path from "path";
import {nutritionQuery} from "../../database/search/query";

export const product = (req, res) => {
    let productName = req.params.item;
    console.log(productName);
    let startSql = nutritionQuery(req, res, productName);

    req.headers = {
        "Referer" : "http://localhost:3000/commodity/product/"+ productName,
    };
    req.URL = "http://localhost:3000/commodity/product/information/review/" + productName;
    console.log(req.URL);
    //res.send(startSql);
    res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
};

export const depthOne = (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
};
