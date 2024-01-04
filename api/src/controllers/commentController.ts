import { Request, Response } from "express";
import commentRepository from "../context/CommentRepository";
import { BadRequest } from "exceptions/BadRequest";

export const createComment = async (req: Request, res: Response) => {
    const { content } = req.body;
    const postId = req.params.id;
    const { id } = req.payload;

    const comment = await commentRepository.CreateComment(postId, id, content);

    if (!comment) {
        throw new BadRequest("Comment not created.");
    }

    return res.status(201).json(comment);
};

export const updateComment = async (req: Request, res: Response) => {
    const { id, content } = req.body;

    const comment = await commentRepository.UpdateComment(id, content);

    if (!comment) {
        throw new BadRequest("Comment not exist.");
    }

    return res.status(200).json(comment);
};

export const deleteComment = async (req: Request, res: Response) => {
    const { id } = req.body;

    const comment = await commentRepository.DeleteComment(id);

    if (!comment) {
        throw new BadRequest("Something went wrong, comment not deleted.");
    }
    return res.status(200).json("Deleted");
};
