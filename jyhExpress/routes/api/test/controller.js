import {connectionTest, transactionTest} from '../../../database/test/query';
import {queryTest} from "../../../database/test/query";

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