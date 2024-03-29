import { Router } from "express";
import * as authController from "./controllers/authController";
import * as userController from "./controllers/userController";
import * as postController from "./controllers/postController";
import * as commentController from "./controllers/commentController";
import * as openaiController from "./controllers/openAiController";
import "express-async-errors";
import { IsAuthenticated } from "middlewares/Auth";
import { validate } from "middlewares/Validate";
import { registerSchema, loginSchema } from "validations/authValidations";
import { updateGetSchema } from "validations/userValidations";
import {
    createPostValidation,
    updatePostValidation,
} from "validations/postValidations";
import {
    createCommentValidation,
    updateCommentValidation,
} from "validations/commnetValidations";

const router = Router();

// Auth
router.post(
    "/user/register",
    validate(registerSchema),
    authController.register,
);
router.post("/user/login", validate(loginSchema), authController.login);

// user
router.get("/user/get", IsAuthenticated, userController.getUser);
router.put(
    "/user/update",
    validate(updateGetSchema),
    IsAuthenticated,
    userController.updateUser,
);
router.delete("/user/delete", IsAuthenticated, userController.deleteUser);

// Post
router.post(
    "/post/create",
    validate(createPostValidation),
    IsAuthenticated,
    postController.CreatePost,
);
router.get("/post/get", IsAuthenticated, postController.GetAllPost);
router.put(
    "/post/update/:id",
    validate(updatePostValidation),
    IsAuthenticated,
    postController.UpdatePost,
);
router.get("/post/get/:id", IsAuthenticated, postController.GetPostById);
router.delete("/post/delete/:id", IsAuthenticated, postController.DeletePost);

// Comment
router.post(
    "/comment/create/:id",
    validate(createCommentValidation),
    IsAuthenticated,
    commentController.createComment,
);
router.put(
    "/comment/update",
    validate(updateCommentValidation),
    IsAuthenticated,
    commentController.updateComment,
);
router.delete(
    "/comment/delete",
    IsAuthenticated,
    commentController.deleteComment,
);

// Developing ...
// OpenAI
router.post("/test", openaiController.generatePost);
export default router;
