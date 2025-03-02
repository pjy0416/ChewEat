import {connect, transaction} from '../db';

export const connectionTest = connect(async (con) =>{
    let query = "SELECT * FROM PRODUCT "; // 쿼리문 작성시 가급적 맨 뒤에 공백 넣어줄 것
    const result = await con.query(query, []);  //해당 결과는 변경이 되면 이상하므로 const.

    console.log(result);

    return result;
});

export const transactionTest = transaction(async (con) =>{
    let fetchQuery = "SELECT *FROM USER ";
    let insertQuery = "INSERT INTO user (type, name, account, password) values (?, ?, ?, ?) ";
    //만약 해당 컬럼 중 unique한 컬럼이 있다면 추가를 시도 할 때, 중복 시 transaction rollback 이 발생된다.

    const fetch = await con.query(fetchQuery, []);
    //fetch의 결과를 insert에 대입.
    const insert = await con.query(insertQuery, [fetch[0].type, fetch[0].name+"tt", fetch[0].account+"tt", fetch[0].password]);

    return insert;
});

export const queryTest = connect(async (con) => {
   /*let fetchQuery = "SELECT PRODUCTID FROM PRODUCT WHERE PRODUCTNAME = 'JaGaBi' ";
   let searchQuery = "SELECT URL FROM PRODUCTATTACHMENT WHERE PRODUCTID = ? ";

   const fetch = await con.query(fetchQuery, []);
   const search = await con.query(searchQuery, [fetch[0].PRODUCTID]);
*/

    let fetchQuery = "SELECT PRODUCTID FROM PRODUCT WHERE PRODUCTNAME = 'Honey_Butter_Chip' ";
    let searchQuery = "SELECT * FROM PRODUCTNUTRITION WHERE PRODUCTID = ? ";

    const fetch = await con.query(fetchQuery, []);
    const search = await con.query(searchQuery, [fetch[0].PRODUCTID]);

    return search;
});
