import { baseResponse } from "../../../../utils/Response.js";
import { getPizzaToppingsRepo } from "../repository/catalogPizzaToppingsRepo.js";

export const getPizzaToppings = async(req, res) => {
    const {data, error} = await getPizzaToppingsRepo();
    if (error) {
        res.status(500).json(baseResponse(500, error, null));
    } else {
        res.status(200).json(baseResponse(200, null, data));
    }
}