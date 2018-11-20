import {searchTaste} from "../../../../database/search/query";

export const searchTasteCall = async(req, res, param1, param2) => {
    let taste ;
    switch (param2) {
        case 'item1' :
            taste = 'Curry';
            break;
        case 'item2' :
            taste = 'Frozen Food';
            break;
        case 'item3' :
            taste = 'Canned';
            break;
        case 'item4' :
            taste = 'Soup';
            break;
        default :
            break;
    }
    let startSql = await searchTaste(param1, taste);

    res.send(startSql);
};