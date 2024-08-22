import express from "express"
import { verifyToken } from "../middlewares/perizinan"
import { createPack, dropPack, getPacks, updatePack } from "../controllers/packControllers"
import { verifyAddPack, verifyEditPack } from "../middlewares/verifikasiPack"
const app = express()

app.use(express.json())
/** add middleware process to verify token */
app.get(`/`, [verifyToken], getPacks)

/** add middleware process to varify token and verify request data */
app.post(`/`, [verifyToken, verifyAddPack], createPack)

/** add middleware process to varify token and verify request data */
app.put(`/:id`, [verifyToken, verifyEditPack], updatePack)

/** add middleware process to verify token */
app.delete(`/:id`, [verifyToken], dropPack)

export default app