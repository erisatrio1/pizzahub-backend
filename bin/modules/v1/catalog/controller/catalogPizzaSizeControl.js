import { baseResponse } from "../../../../utils/Response.js";
import { getPizzaSizeRepo } from "../repository/catalogPizzaSizeRepo.js";

export const getPizzaSize = async(req, res) => {
    const {data, error} = await getPizzaSizeRepo();
    if (error) {
        res.status(500).json(baseResponse(500, error, null)); 
    } else {
        res.status(200).json(baseResponse(200, null, data))
    }
}