import { Request, Response } from "express";
import { ranking } from "../repositories/battleRepository";

export async function getRank(req:Request, res:Response) {
    const { rows:result } = await ranking();

    return res.status(200).send(result);
}