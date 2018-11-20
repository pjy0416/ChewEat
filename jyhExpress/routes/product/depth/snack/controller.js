import {searchTaste} from "../../../../database/search/query";

export const searchTasteCall = async(req, res, param1, param2) => {
    let taste ;
    switch (param2) {
        case 'item1' :
            taste = 'Sweet';
            break;
        case 'item2' :
            taste = 'Chocolate';
            break;
        case 'item3' :
            taste = 'Cheese&Butter';
            break;
        case 'item4' :
            taste = 'Potato';
            break;
        default :
            break;
    }

    let startSql = await searchTaste(param1, taste);

    res.send(startSql);
};