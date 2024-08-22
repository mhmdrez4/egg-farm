import express from "express"
import { verifyToken } from "../middlewares/perizinan"
import { createEgg, dropEgg, getAllEggs, updateEgg } from "../controllers/eggControllers"
import uploadFile from "../middlewares/uploadImageOfEgg"
import { verifyAddEgg, verifyEditEgg } from "../middlewares/verifikasiEgg"
const app = express()

app.use(express.json())
/** add middleware process to verify token */
app.get(`/`, getAllEggs)

/** add middleware process to varify token, upload an image, and verify request data */
app.post(`/`, createEgg)

/** add middleware process to varify token, upload an image, and verify request data */
app.put(`/:id`, updateEgg)

/** add middleware process to verify token */
app.delete(`/:id`, dropEgg)
export default app