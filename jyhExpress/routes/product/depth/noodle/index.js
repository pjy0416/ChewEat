import express from 'express';
import {searchAllCall} from "../../controller"
import {searchTasteCall} from "./controller";

let router = express.Router();
const category = "Noodle";

/*router.get('/',(req, res) => {
    searchAllCall(req, res, category);
});*/

router.get('/:taste', (req,res) => {
    let taste = req.params.taste;
    console.log('asdasd');
    console.log(taste);
    if(taste == 'ALL') {
        searchAllCall(req, res, category);
    }else {
        searchTasteCall(req, res, category, taste);
    }
});

module.exports = router;
