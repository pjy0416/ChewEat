import {searchTaste} from "../../../../database/search/query";

export const searchTasteCall = async(req, res, param1, param2) => {
    let taste ;
    switch (param2) {
        case 'item1' :
            taste = 'Ramyun';
            break;
        case 'item2' :
            taste = 'Cold Noodle';
            break;
        case 'item3' :
            taste = 'Soba & Udon';
            break;
        case 'item4' :
            taste = 'Traditional';
            break;
        default :
            break;
    }
    let startSql = await searchTaste(param1, taste);

    res.send(startSql);
};