import {Request, Response, NextFunction} from "express";
import { RegisterValidationSchema } from "../validation/register.validation";

export const Register = async(req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    const validation = RegisterValidationSchema.validate(body);

    try {
        await validation;
        next();
    } catch (error) {
        return res.status(400).send({error})
      }

    res.send(req.body);  
}