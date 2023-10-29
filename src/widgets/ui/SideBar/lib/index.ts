import {SearchParams} from "features/api";

export const clearSearchText = (text:string): SearchParams => {
    const reg = new RegExp(/ /g)
    const arrSearch = text.replace(reg,"").split(",")
    const count = arrSearch.length
    const isNumber = arrSearch.join(",").match(/\d+/g);

    if(isNumber) {
        return {
            type: "id",
            value: isNumber
        }
    }

    return {
        type: "username",
        value: arrSearch
    }
}