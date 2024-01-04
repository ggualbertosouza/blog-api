import { NextFunction, Request, Response } from "express";

// Packages
import jwt from "jsonwebtoken";

export interface IPayload {
    id: string;
    role: string;
}

export const IsAuthenticated = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const token = req.cookies.auth;

        const { id, role } = jwt.verify(
            token,
            process.env.JWT_SECRET ?? "",
        ) as IPayload;

        req.payload = { id, role };

        next();
    } catch (err) {
        res.clearCookie("auth");
        return res.status(401).json("Token Invalid.");
    }
};
