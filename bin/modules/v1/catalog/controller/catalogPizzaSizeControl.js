import { baseResponse } from "../../../../utils/Response.js";
import { getPizzaSizeRepo } from "../repository/catalogPizzaSizeRepo.js";

export const getPizzaSize = async(req, res) => {
    const pizzaSize = await getPizzaSizeRepo();
    try {
        res.status(200).json(baseResponse(200, null, pizzaSize.data));
    } catch (error) {
        res.status(500).json(baseResponse(500, pizzaSize.error, null));
    }
}