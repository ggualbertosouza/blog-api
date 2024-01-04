import { Request, Response } from "express";
import { BadRequest } from "exceptions/BadRequest";
import PostRepository from "context/PostRepository";
import UserRepository from "context/UserRepository";
import CommentRepository from "context/CommentRepository";

// Create post
export const CreatePost = async (req: Request, res: Response) => {
    const { title, description, content } = req.body;
    const { id } = req.payload;

    const user = await UserRepository.getUserById(id);

    if (!user) {
        throw new BadRequest("User not exist.");
    }
    const post = await PostRepository.GetPostByTitle(title);

    if (post) {
        throw new BadRequest("Post already exist.");
    }

    const newPost = await PostRepository.CreatePost(
        user?.id,
        title,
        description,
        content,
    );

    return res.status(201).json(newPost);
};
// Get all post
export const GetAllPost = async (req: Request, res: Response) => {
    const posts = await PostRepository.GetAllPost();

    if (!posts) {
        throw new BadRequest("Posts aren´t exists.");
    }

    return res.status(200).json(posts);
};
// Update Post
export const UpdatePost = async (req: Request, res: Response) => {
    const { title, description, content } = req.body;
    const id = req.params.id;

    const post = await PostRepository.UpdatePost(
        id,
        title,
        description,
        content,
    );

    if (!post) {
        throw new BadRequest("Post invalid.");
    }

    return res.status(200).json(post);
};

// Get Post By Id
export const GetPostById = async (req: Request, res: Response) => {
    const id = req.params.id;

    const post = await PostRepository.GetPostById(id);

    if (!post) {
        throw new BadRequest("Post not exist.");
    }

    const comments = await CommentRepository.GetAllCommentByPostId(post.id);

    return res.status(200).json({ post: { post }, comments: { comments } });
};

// Remove post
export const DeletePost = async (req: Request, res: Response) => {
    const id = req.params.id;

    const post = await PostRepository.DeletePost(id);

    if (!post) {
        throw new BadRequest("Something went wrong, post not deleted.");
    }

    return res.status(200).json("Deleted.");
};
