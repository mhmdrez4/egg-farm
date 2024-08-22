import express from "express"
import { verifyToken } from "../middlewares/perizinan"
import { createSale, dropSale, getAllSales } from "../controllers/saleControllers"
import { verifyAddSale } from "../middlewares/verifikasiSale"
const app = express()

app.use(express.json())
app.get(`/`, [verifyToken], getAllSales)
app.post(`/`, [verifyToken, verifyAddSale], createSale)
app.delete(`/:id`, [verifyToken], dropSale)
export default app