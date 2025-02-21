import express from "express" // criação do servidor
import cors from "cors" //evita conflito

import userRoutes from "./routes/users.js"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", userRoutes)

app.listen(8800)
