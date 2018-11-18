import {productAllQuery, productTasteQuery} from "../../database/search/query";
import {nutritionQuery, commentQuery} from "../../database/search/query";
import {commentInsertQuery, commentUpdateQuery} from "../../database/search/query";

export const connectCall = async (req, res) => {
    let startSql = await connectionTest();

    res.send(startSql);
};

export const transactionCall = async (req, res) => {
    let startSql = await transactionTest();

    res.send(startSql);
};

export const testQueryCall = async (req, res) => {
    let startSql = await queryTest();

    res.send(startSql);
};

export const productAllQueryCall = async (req, res) => {
    let startSql = await productAllQuery();

    res.send(startSql);
};

export const productTasteQueryCall = async (req, res) => {
    let startSql = await productTasteQuery();

    res.send(startSql);
};

export const nutritionQueryCall = async (req, res) => {
    let startSql = await nutritionQuery();

    res.send(startSql);
};

export const commentQueryCall = async (req, res) => {
    let startSql = await commentQuery();

    res.send(startSql);
};

export const commentInsertQueryCall = async (req, res) => {
    let startSql = await commentInsertQuery();

    res.send(startSql);
};

export const commentUpdateQueryCall = async (req, res) => {
    let startSql = await commentUpdateQuery();

    res.send(startSql);
};