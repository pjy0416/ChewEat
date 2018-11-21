import {connect, transaction} from '../db';

//1. 카테고리 별 All 검색
export const searchAll = connect (async (con, parameter) => {
    let query = "SELECT DISTINCT a.* FROM PRODUCT a, CATEGORY b WHERE b.DEPTHONE = ? and b.CATEGORYID = a.CATEGORYID ";
    const result = await con.query(query, parameter);

    return result;
});

//2. 카테고리 별 한가지 맛 검색
export const searchTaste = connect (async (con, parameter1, parameter2) => {
    let query = "SELECT DISTINCT a.* FROM PRODUCT a, CATEGORY b WHERE b.DEPTHONE =? and b.DEPTHTWO = ? and b.CATEGORYID = a.CATEGORYID ";
    const result = await con.query(query, [parameter1, parameter2]);

    return result;
});

//3. detail page에서 영양정보 및 코멘트
export const detailQuery = connect (async (con, param) => {
    let query = "SELECT a.*, b.* FROM cheweat.PRODUCTNUTRITION a, cheweat.REVIEW b WHERE a.PRODUCTID =? and a.PRODUCTID = b.PRODUCTID ";
    const result = await con.query(query, param);

    return result;
});

//3-1. Product detail page (Nutrition Information) 상세 페이지 영양정보 (6가지만)
export const nutritionQuery = connect(async (con, param) => {
    let tmpQuery = "SELECT PRODUCTID FROM PRODUCT WHERE PRODUCTNAME = ? ";
    let query = "SELECT NATRIUM, CARBOHYDRATE, SUGARS, FAT, CHOLESTEROL, PROTEIN  FROM PRODUCTNUTRITION WHERE PRODUCTID = ? ";

    const fetch = await con.query(tmpQuery, param);
    let productID = fetch[0].PRODUCTID;
    console.log(productID);
    const result = await con.query(query, [productID]);

    return result;
});

//4. detail page comment .
export const reviewQuery = connect(async (con, param) => {
    let tmpQuery = "SELECT PRODUCTID FROM PRODUCT WHERE PRODUCTNAME = ? ";
    let query = "SELECT * FROM REVIEW WHERE PRODUCTID = ? ";

    const fetch = await con.query(tmpQuery, param);
    let productID = fetch[0].PRODUCTID;

    const result = await con.query(query, productID);

    return result;
});

//5. comment 작성 시 데이터 베이스에 update
export const reviewInsertQuery = transaction(async (con, param1, param2) => {
    let fetchQuery = "SELECT COUNT(reviewID) AS reviewID FROM REVIEW ";    // comment에서 productID에 해당하는 댓글의 수 (commentID의 수)를 받아온다
    let insertQuery = "INSERT INTO REVIEW (reviewID, productID, contents) values (?, ?, ?) ";                     // 받아온 count number를 review에 대입
    let syncQuery = "UPDATE PRODUCT SET REVIEW  = (SELECT COUNT(PRODUCTID) FROM REVIEW WHERE PRODUCTID = ?) ";

    const fetch = await con.query(fetchQuery, []);
    let commentSize = fetch[0].reviewID+1;

    //Insert a comment to database
    await con.query(insertQuery, [commentSize, param1, param2]);        // param1 = productID, param2 = content

    //Synchronize a number of review between PRODUCT and COMMENT
    await con.query(syncQuery, param1);     // 사용하지 않을 결과기 때문에 변수로 지정 x

    return true;
});

// 제품 리뷰 달릴 때 카운팅 ~> product 테이블의 review(숫자)에 저장
//export const reviewCount = transaction


//6. review 좋아요 클릭 시 좋아요 갯수 늘어나게
export const reviewIncLikeQuery = transaction(async (con, param) => {
    let fetchQuery = "SELECT likeCount FROM REVIEW WHERE REVIEWID = ? ";    // comment에서 productID에 해당하는 댓글의 수 (commentID의 수)를 받아온다
    let updateQuery = "UPDATE REVIEW SET likeCount = ? WHERE REVIEWID = ? ";                     // 받아온 count number를 review에 대입

    const fetch = await con.query(fetchQuery, param);
    let increasedNum = fetch[0].likeCount +1;

    const update = await con.query(updateQuery, [increasedNum, param]);

    return update;
});

//7. review 좋아요 취소 시 좋아요 갯수 줄어들게
export const reviewDecLikeQuery = transaction(async (con, param) => {
    let fetchQuery = "SELECT likeCount FROM REVIEW WHERE REVIEWID = ? ";    // comment에서 productID에 해당하는 댓글의 수 (commentID의 수)를 받아온다
    let updateQuery = "UPDATE REVIEW SET likeCount = ? WHERE REVIEWID = ? ";                     // 받아온 count number를 review에 대입

    const fetch = await con.query(fetchQuery, param);
    let increasedNum = fetch[0].likeCount -1;

    const update = await con.query(updateQuery, [increasedNum, param]);

    return update;
});

//8. 제품 좋아요 클릭 시 좋아요 갯수 늘어나게
export const productIncLikeQuery = transaction(async (con, param) => {
    let fetchQuery = "SELECT likeCount FROM PRODUCT WHERE PRODUCTID = ? ";    // comment에서 productID에 해당하는 댓글의 수 (commentID의 수)를 받아온다
    let updateQuery = "UPDATE PRODUCT SET likeCount = ? WHERE PRODUCTID = ? ";                     // 받아온 count number를 review에 대입

    const fetch = await con.query(fetchQuery, param);
    let increasedNum = fetch[0].likeCount +1;

    const update = await con.query(updateQuery, [increasedNum, param]);

    return update;
});

//6. 제품 좋아요 취소 시 좋아요 갯수 줄어들게
export const productDecLikeQuery = transaction(async (con, param) => {
    let fetchQuery = "SELECT likeCount FROM PRODUCT WHERE PRODUCTID = ? ";    // comment에서 productID에 해당하는 댓글의 수 (commentID의 수)를 받아온다
    let updateQuery = "UPDATE PRODUCT SET likeCount = ? WHERE PRODUCTID = ? ";                     // 받아온 count number를 review에 대입

    const fetch = await con.query(fetchQuery, param);
    let increasedNum = fetch[0].likeCount -1;

    const update = await con.query(updateQuery, [increasedNum, param]);

    return update;
});

//
/*
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



//2-2. Product detail page (Review Information)


//3-1. Review Insert


//3-2. Review count update
*/
