import PizzaSize from "../../../../infra/MySQL/CatalogPizzaSize.js";
import { dbResult } from "../../../../utils/Response.js";


export const getPizzaSizeRepo = async() => {
    try {
        const pizzaSizeRepo = await PizzaSize.findAll({
            attributes:['uuid', 'size', 'calculation']
        });
        return dbResult(pizzaSizeRepo, null);
    } catch (error) {
        console.log("error", error.message);
        return dbResult(null, new Error('error query to database'))
    }
}