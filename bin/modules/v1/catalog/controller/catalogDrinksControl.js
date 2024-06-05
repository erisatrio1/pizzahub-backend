import { baseResponse } from "../../../../utils/Response.js";
import { getDrinksRepo } from "../repository/catalogDrinksRepo.js";

export const getDrinks = async(req, res) => {
    const drinks = await getDrinksRepo();
    try {
        res.status(200).json(baseResponse(200, null, drinks.data));
    } catch (error) {
        res.status(500).json(baseResponse(500, drinks.error, null));
    }
}