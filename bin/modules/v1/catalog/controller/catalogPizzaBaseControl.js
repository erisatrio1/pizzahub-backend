import { baseResponse } from "../../../../utils/Response.js";
import { getPizzaBaseRepo } from "../repository/catalogPizzaBaseRepo.js";

export const getPizzaBase = async(req, res) => {
    const pizzaBase = await getPizzaBaseRepo();
    try {
        res.status(200).json(baseResponse(200, null, pizzaBase.data));
    } catch (error) {
        res.status(500).json(baseResponse(500, pizzaBase.error, null));
    }
}