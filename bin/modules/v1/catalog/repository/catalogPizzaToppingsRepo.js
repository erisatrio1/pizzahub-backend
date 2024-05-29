import PizzaToppings from "../../../../infra/MySQL/CatalogPizzaToppings.js";
import { dbResult } from "../../../../utils/Response.js";


export const getPizzaToppingsRepo = async() => {
    try {
        const pizzaToppingsRepo = await PizzaToppings.findAll({
            attributes:['uuid', 'topping', 'price']
        });
        return dbResult(pizzaToppingsRepo, null);
    } catch (error) {
        console.log("error", error.message);
        return dbResult(null, new Error('error query to database'))
    }
}