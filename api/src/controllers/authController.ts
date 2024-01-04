// Modules
import UserRepository from "context/UserRepository";
import { Request, Response } from "express";

// Packages
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { BadRequest } from "exceptions/BadRequest";

// add user
export const register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    const user = await UserRepository.getUserByEmail(email);

    if (user) {
        throw new BadRequest("User already exist.");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await UserRepository.addUser(name, email, hashPassword);

    return res.status(201).json(newUser);
};

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await UserRepository.getUserByEmail(email);

    if (!user) {
        throw new BadRequest("User not exist.");
    }

    const hashPassword = await bcrypt.compare(password, user.password);

    if (!hashPassword) {
        throw new BadRequest("User Invalid.");
    }

    const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET ?? "",
        { expiresIn: "1h" },
    );

    res.cookie("auth", token, { httpOnly: true });

    const { name, email: mail } = user;

    return res.status(200).json({ name, mail });
};
