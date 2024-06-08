import { baseResponse } from "../../../../utils/Response.js";
import { getDrinksRepo } from "../repository/catalogDrinksRepo.js";

export const getDrinks = async(req, res) => {
    const {data, error} = await getDrinksRepo();

    if (error) {
        res.status(500).json(baseResponse(500, error, null));   
    } else {
        res.status(200).json(baseResponse(200, null, data));   
    }
}