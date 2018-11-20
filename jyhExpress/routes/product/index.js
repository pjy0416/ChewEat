import express from 'express';
import snack from './depth/snack';
import noodle from './depth/noodle';
import drink from './depth/drink';
import dairy from './depth/dairy';
import instant from './depth/instant';
import product from './product';
import comment from './comment';
import {searchAllCall} from "./controller";

let router = express.Router();

router.get('/product/information', (req, res) => {
    searchAllCall(req, res, 'snack')
});


router.use('/review', comment);
router.use('/detail',product);      // detail routing 해놓은거
router.use('/snack', snack);
router.use('/noodle', noodle);
router.use('/drink', drink);
router.use('/dairy', dairy);
router.use('/instant', instant);


module.exports = router;
