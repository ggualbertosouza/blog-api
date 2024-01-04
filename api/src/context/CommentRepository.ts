import { prisma } from "context/Prisma";

class CommentRepository {
    async CreateComment(postId: string, userId: string, content: string) {
        const comment = await prisma.comment.create({
            data: {
                postId,
                userId,
                content,
            },
        });

        return comment;
    }

    async GetAllCommentByPostId(postId: string) {
        const allComment = prisma.comment.findMany({
            where: {
                postId: postId,
            },
        });

        return allComment;
    }

    async GetAllCommentByUserId(userId: string) {
        const allComment = prisma.comment.findMany({
            where: {
                userId: userId,
            },
        });

        return allComment;
    }

    async UpdateComment(id: string, content: string) {
        const commentToUpdate = await prisma.comment.update({
            where: { id: id },
            data: { content },
        });

        return commentToUpdate;
    }

    async DeleteComment(id: string) {
        try {
            const commentDeleted = await prisma.comment.delete({
                where: { id },
            });
            return true;
        } catch {
            return false;
        }
    }
}

export default new CommentRepository();
