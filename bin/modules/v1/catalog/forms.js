import express from 'express'
import catalogRouter from './router/catalogRoute.js'

const router = express.Router();

router.use('/catalog', catalogRouter);

export default router;