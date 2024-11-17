import { NextFunction, Request, Response } from "express";
import Jwt from "jsonwebtoken";
import { TokenData } from "../../types";


export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({
                sucess: false,
                message: "Usuario no autorizado"
            })
        }

        //VERIFICACIÓN DEL TOKEN
        const decode = Jwt.verify(
            token,
            process.env.JWT_SECRET as string
        )

        req.tokenData = decode as TokenData;
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error token no valido"
        })
    }
}