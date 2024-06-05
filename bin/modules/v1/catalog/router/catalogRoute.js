import express from 'express'
import { getPizzaBase } from '../controller/catalogPizzaBaseControl.js'
import { getPizzaSize } from '../controller/catalogPizzaSizeControl.js'
import { getPizzaToppings } from '../controller/catalogPizzaToppingsControl.js'
import { getDrinks } from '../controller/catalogDrinksControl.js'

const router = express.Router();

router.get('/base', getPizzaBase);
router.get('/toppings', getPizzaToppings);
router.get('/size', getPizzaSize);
router.get('/drinks', getDrinks);

export default router;