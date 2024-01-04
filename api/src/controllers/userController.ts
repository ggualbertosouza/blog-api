import CommentRepository from "context/CommentRepository";
import UserRepository from "context/UserRepository";
import { BadRequest } from "exceptions/BadRequest";
import { Request, Response } from "express";

// Get user
export const getUser = async (req: Request, res: Response) => {
    const { id } = req.payload;

    const user = await UserRepository.getUserById(id);

    if (!user) {
        throw new BadRequest("User not found.");
    }

    const { password, role, id: _, ...data } = user;

    const comments = await CommentRepository.GetAllCommentByUserId(id);

    return res.status(200).json({ user: { data }, coments: { comments } });
};

// Update user
export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.payload;
    const { name, email, password, role } = req.body;

    const user = await UserRepository.updateUser(
        id,
        name,
        email,
        password,
        role,
    );

    const { id: _, ...data } = user;

    return res.status(200).json(data);
};

// Delete user
export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.payload;

    const userDeleted = await UserRepository.removeUser(id);

    if (!userDeleted) {
        throw new BadRequest("Something went wrong, User not deleted.");
    }

    res.clearCookie("auth");

    return res.status(200).json("Deleted.");
};
