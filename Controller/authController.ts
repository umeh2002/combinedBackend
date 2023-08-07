import express, {Request, Response} from "express"


export const createUser =async (req:Request, res:Response)=>{
    try {
        
    } catch (error) {
        return res.status(404).json({
            message:"cannot create user",
            data:error.message
        })
    }
}