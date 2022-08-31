import { Request, Response } from "express";
import * as battleService from "../services/battleService";

export async function battle(req:Request, res:Response) {
    const { firstUser, secondUser } : { firstUser:string, secondUser:string } = req.body;

    const result = await battleService.battle(firstUser,secondUser)

    return res.status(200).send(result);
}