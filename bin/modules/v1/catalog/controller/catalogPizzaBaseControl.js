import { baseResponse } from "../../../../utils/Response.js";
import { getPizzaBaseRepo } from "../repository/catalogPizzaBaseRepo.js";

export const getPizzaBase = async(req, res) => {
    const {data, error} = await getPizzaBaseRepo();
    if (error) {
        res.status(500).json(baseResponse(500, error, null));
    } else {
        res.status(200).json(baseResponse(200, null, data));   
    }
}