import {connect, transaction} from '../db';

//1-1. All Product data per category
export const productAllQuery = connect(async (con) => {
    let categories = [1,2,3,4]; // Query마다 바뀌기 때문에 let이 적절
    let query = "SELECT DISTINCT * FROM PRODUCT WHERE CATEGORYID = ? or CATEGORYID = ? or CATEGORYID = ? or CATEGORYID = ? "; // CATEGORY ID 4개가 되야함

    const result = await con.query(query, [categories[0], categories[1], categories[2], categories[3]]);

    return result;
});

//1-2. Product data per category's taste
export const productTasteQuery = connect(async (con) => {
    let category = 1; // Query마다 바뀌기 때문에 let이 적절
    let query = "SELECT DISTINCT a.*, b.url FROM PRODUCT a, PRODUCTATTACHMENT b WHERE a.CATEGORYID = ? "; // DISTINCT를 통해 중복 제거 (안하면 중복 엄청나옴)
    const result = await con.query(query, category);

    return result;
});

//2-1. Product detail page (Nutrition Information) 상세 페이지 영양정보
export const nutritionQuery = connect(async (con) => {
    let productID = 1;
    let query = "SELECT * FROM PRODUCTNUTRITION WHERE PRODUCTID = ? ";
    const result = await con.query(query, productID);

    return result;
});

//2-2. Product detail page (Review Information)
export const commentQuery = connect(async (con) => {
    let productID = 1;
    let query = "SELECT * FROM COMMENT WHERE PRODUCTID = ? ";
    const result = await con.query(query, productID);

    return result;
});

//3-1. Review Insert
export const commentInsertQuery = connect(async (con) => {
    let productID = 1;
    let contents = "JaGaBi is my favorite2";
    let fetchQuery = "SELECT COUNT(COMMENTID) AS commentID FROM COMMENT ";    // comment에서 productID에 해당하는 댓글의 수 (commentID의 수)를 받아온다
    let insertQuery = " INSERT INTO COMMENT (commentID, productID, contents) values (?, ?, ?) ";                     // 받아온 count number를 review에 대입

    const fetch = await con.query(fetchQuery, []);
    console.log(fetch);
    const insert = await con.query(insertQuery, [fetch[0].commentID+1, productID, contents]);

    return insert;
});

//3-2. Review count update
export const commentUpdateQuery = transaction(async (con) => {
    let productID = 6;
    let fetchQuery = "SELECT COUNT(COMMENTID) AS cntnum FROM COMMENT WHERE PRODUCTID = ? ";    // comment에서 productID에 해당하는 댓글의 수 (commentID의 수)를 받아온다
    let updateQuery = "UPDATE PRODUCT SET REVIEW = ? WHERE PRODUCTID = ? ";                     // 받아온 count number를 review에 대입

    const fetch = await con.query(fetchQuery, productID);
    const update = await con.query(updateQuery, [fetch[0].cntnum, productID]);

    return update;
});