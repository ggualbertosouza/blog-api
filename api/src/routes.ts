import { Router } from "express";
import * as authController from "./controllers/authController";
import * as userController from "./controllers/userController";
import * as postController from "./controllers/postController";
import * as commentController from "./controllers/commentController";
import "express-async-errors";
import { IsAuthenticated } from "middlewares/Auth";

const router = Router();

// Auth
router.post("/user/register", authController.register);
router.post("/user/login", authController.login);

// user
router.get("/user/get", IsAuthenticated, userController.getUser);
router.put("/user/update", IsAuthenticated, userController.updateUser);
router.delete("/user/delete", IsAuthenticated, userController.deleteUser);

// Post
router.post("/post/create", IsAuthenticated, postController.CreatePost);
router.get("/post/get", IsAuthenticated, postController.GetAllPost);
router.put("/post/update/:id", IsAuthenticated, postController.UpdatePost);
router.get("/post/get/:id", IsAuthenticated, postController.GetPostById);
router.delete("/post/delete/:id", IsAuthenticated, postController.DeletePost);

// Comment
router.post(
    "/comment/create/:id",
    IsAuthenticated,
    commentController.createComment,
);
router.put("/comment/update", IsAuthenticated, commentController.updateComment);
router.delete(
    "/comment/delete",
    IsAuthenticated,
    commentController.deleteComment,
);
export default router;
