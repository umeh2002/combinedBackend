import cors from "cors"
import express, { Application } from "express"
import task from "./Router/taskRouter"

const main =(app:Application)=>{
    app.use(express.json())
    app.use(cors())

    app.use("/api/v1/task", task)
}

export default main