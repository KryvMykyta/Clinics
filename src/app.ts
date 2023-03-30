import { ClinicsRepository } from './repository/clinicsRepository';
import Database from "better-sqlite3";
import cors from 'cors'
import express from 'express';
import { ClinicsController } from './controllers/clinicsController';
import dotenv from 'dotenv'
dotenv.config()


const clinicsDB = new Database(process.env.DB_FILENAME as string)

const clinicsRepository = new ClinicsRepository(clinicsDB)

const app = express()
const PORT = 3000
app.use(express.json())
app.use(cors())


const clinics = new ClinicsController("/api", clinicsRepository)

clinics.init()
app.use(clinics.path, clinics.router)


app.listen(PORT, () => {
    console.log("started")
})

