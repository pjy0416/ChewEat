import express from 'express';
import snack from './depth/snack';
import noodle from './depth/noodle';
import drink from './depth/drink';
import dairy from './depth/dairy';
import instant from './depth/instant';
import review from './review';
import {searchAllCall} from "./controller";

let router = express.Router();

router.get('/product/information', (req, res) => {      // 큰 카테고리의 All 선택 시
    searchAllCall(req, res, 'snack')
});

router.use('/review', review);     // detail page에서 query 두 개 결과를 json으로 날려주는  라우팅
router.use('/snack', snack);
router.use('/noodle', noodle);
router.use('/drink', drink);
router.use('/dairy', dairy);
router.use('/instant', instant);


module.exports = router;
