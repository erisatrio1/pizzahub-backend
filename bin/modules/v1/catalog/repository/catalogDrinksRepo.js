import Drinks from "../../../../infra/MySQL/CatalogDrinks.js";
import { dbResult } from "../../../../utils/Response.js";


export const getDrinksRepo = async() => {
    try {
        const drinksRepo = await Drinks.findAll({
            attributes:['uuid', 'drink', 'price']
        });
        return dbResult(drinksRepo, null);
    } catch (error) {
        console.log("error", error.message);
        return dbResult(null, new Error('error query to database'))
    }
}