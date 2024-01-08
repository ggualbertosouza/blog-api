import { prisma } from "lib/Prisma";

class PostRepository {
    // Create post
    async CreatePost(
        userId: string,
        title: string,
        description: string,
        content: string,
    ) {
        const newPost = await prisma.post.create({
            data: {
                userId,
                title,
                description,
                content,
            },
        });

        return newPost;
    }

    // Get all posts
    async GetAllPost() {
        return await prisma.post.findMany();
    }

    // GetPostById
    async GetPostById(id: string) {
        return await prisma.post.findUnique({ where: { id: id } });
    }
    //GetPostByTitle
    async GetPostByTitle(title: string) {
        return await prisma.post.findUnique({ where: { title: title } });
    }
    // Update post
    async UpdatePost(
        id: string,
        title: string,
        description: string,
        content: string,
    ) {
        const post = await prisma.post.update({
            where: {
                id: id,
            },
            data: {
                title,
                description,
                content,
            },
        });

        return post;
    }
    // Remove post
    async DeletePost(id: string) {
        try {
            const postDeleted = await prisma.post.delete({
                where: { id },
            });
            return true;
        } catch {
            return false;
        }
    }
}

export default new PostRepository();
