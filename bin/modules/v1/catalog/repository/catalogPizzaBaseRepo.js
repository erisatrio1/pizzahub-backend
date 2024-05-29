import PizzaBase from "../../../../infra/MySQL/CatalogPizzaBase.js";
import { dbResult } from "../../../../utils/Response.js";


export const getPizzaBaseRepo = async() => {
    try {
        const pizzaBaseRepo = await PizzaBase.findAll({
            attributes:['uuid', 'base', 'price']
        });
        return dbResult(pizzaBaseRepo, null);
    } catch (error) {
        console.log("error", error.message);
        return dbResult(null, new Error('error query to database'))
    }
}