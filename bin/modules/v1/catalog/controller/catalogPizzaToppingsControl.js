import { baseResponse } from "../../../../utils/Response.js";
import { getPizzaToppingsRepo } from "../repository/catalogPizzaToppingsRepo.js";

export const getPizzaToppings = async(req, res) => {
    const pizzaToppings = await getPizzaToppingsRepo();
    try {
        res.status(200).json(baseResponse(200, null, pizzaToppings.data));
    } catch (error) {
        res.status(500).json(baseResponse(500, pizzaToppings.error, null));
    }
}