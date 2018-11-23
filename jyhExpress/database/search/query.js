import {connect, transaction} from '../db';

//1. 카테고리 별 All 검색
export const searchAll = connect (async (con, parameter) => {
    let query = "SELECT DISTINCT a.* FROM product a, category b WHERE b.depthOne = ? and b.categoryID = a.categoryID ";
    const result = await con.query(query, parameter);

    return result;
});

//2. 카테고리 별 한가지 맛 검색
export const searchTaste = connect (async (con, parameter1, parameter2) => {
    let query = "SELECT DISTINCT a.* FROM product a, category b WHERE b.depthOne =? and b.depthTwo= ? and b.categoryID = a.categoryID ";
    const result = await con.query(query, [parameter1, parameter2]);

    return result;
});

//3. Product detail page 상단 정보
export const productQuery = connect(async (con, param) => {
    let query = "SELECT URL as url, productName  as productName, productMatrials as productMatrials, allergenic as allergenic, likeCount as likeCount, review as review FROM product WHERE productID = ? ";
    const result = await con.query(query, [param]);

    return result;
});

export const productKcalQuery = connect(async (con, param) => {
    let query = "SELECT overallWeight, perWeight, kcal FROM productnutrition WHERE productID = ? ";
    const result = await con.query(query, param);

    return result;
});

//3-sub. Product detail page (productID ~> CategoryID ~> depth 가져오기)
export const getCategoies = connect(async (con, param) => {
   let idQuery =  "SELECT categoryID AS categoryID FROM product WHERE productID = ? ";
   let categoryQuery = "SELECT depthOne, depthTwo FROM category WHERE categoryID = ? ";

   const fetch = await con.query(idQuery, param);
   let categoryId = fetch[0].categoryID;

   const result = await con.query(categoryQuery, categoryId);

   return result;
});

//3-1. Product detail page (Nutrition Information) 상세 페이지 영양정보 (6가지만)
export const nutritionQuery = connect(async (con, param) => {
    let tmpQuery = "SELECT productID FROM product WHERE productName = ? ";
    let query = "SELECT natrium, carbohydrate, sugars, fat, cholesterol, protein FROM productnutrition WHERE productID = ? ";

    const fetch = await con.query(tmpQuery, param);
    let productID = fetch[0].productID;

    const result = await con.query(query, [productID]);

    return result;
});

//4. detail page comment .
export const reviewQuery = connect(async (con, param) => {
    let tmpQuery = "SELECT productID FROM product WHERE productName = ? ";
    let query = "SELECT * FROM review WHERE productID = ? ";

    const fetch = await con.query(tmpQuery, param);
    let productID = fetch[0].productID;

    const result = await con.query(query, productID);

    return result;
});

//5. comment 작성 시 데이터 베이스에 update
export const reviewInsertQuery = transaction(async (con, param1, param2) => {
    let fetchQuery = "SELECT COUNT(reviewID) AS reviewID FROM review ";    // comment에서 productID에 해당하는 댓글의 수 (commentID의 수)를 받아온다
    let insertQuery = "INSERT INTO review (reviewID, productID, contents) values (?, ?, ?) ";                     // 받아온 count number를 review에 대입
    let syncQuery = "UPDATE product SET review  = (SELECT COUNT(productID) FROM review WHERE productID = ?) WHERE productID = ? ";

    const fetch = await con.query(fetchQuery, []);
    let commentSize = fetch[0].reviewID+1;

    //Insert a comment to database
    await con.query(insertQuery, [commentSize, param1, param2]);        // param1 = productID, param2 = content

    //Synchronize a number of review between PRODUCT and COMMENT
    await con.query(syncQuery, [param1,param1]);     // 사용하지 않을 결과기 때문에 변수로 지정 x

    return true;
});

// 제품 리뷰 달릴 때 카운팅 ~> product 테이블의 review(숫자)에 저장
export const productLikeChange = transaction(async (con, param1, param2) => {
    let fetchQuery = "SELECT likeCount FROM product WHERE productID = ? ";
    let updateQuery = "UPDATE product SET likeCount =? WHERE productID = ? ";

    const fetch = await con.query(fetchQuery, [param1]);

    let likeCount = fetch[0].likeCount;
    if(param2 === true) {
        likeCount += 1;
    } else {
        likeCount -=1;
    }
    await con.query(updateQuery, [likeCount, param1]);
    return true;
});

export const reviewLikeChange = transaction(async (con, param1, param2) => {
    let fetchQuery = "SELECT likeCount FROM review WHERE reviewID = ? ";
    let updateQuery = "UPDATE review SET likeCount =? WHERE reviewID = ? ";

    const fetch = await con.query(fetchQuery, param1);
    let likeCount = fetch[0].likeCount;
    if(param2 === true) {
        likeCount += 1;
    } else {
        likeCount -= 1;
    }
    await con.query(updateQuery, [likeCount, param1]);

    return true;
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
