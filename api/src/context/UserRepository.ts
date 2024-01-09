// Packages
import { Role } from "@prisma/client";
import { prisma } from "lib/Prisma";

class UserRepository {
    // add user
    async addUser(name: string, email: string, password: string) {
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password,
            },
        });

        const { password: _, ...data } = newUser;

        return data;
    }

    // Get ALl
    async getAllUser() {
        const users = prisma.user.findMany();

        return users;
    }
    // update user
    async updateUser(
        id: string,
        name: string,
        email: string,
        password: string,
        role: Role,
    ) {
        const userToUpdate = await prisma.user.update({
            where: {
                id: id,
            },
            data: {
                name: name,
                email: email,
                password: password,
                role: role,
            },
        });

        const { password: _, ...user } = userToUpdate;

        return user;
    }

    // get user by email
    async getUserByEmail(email: string) {
        return await prisma.user.findUnique({ where: { email: email } });
    }

    // get user by Id
    async getUserById(id: string) {
        return await prisma.user.findUnique({ where: { id: id } });
    }

    // remove user
    async removeUser(id: string) {
        try {
            const deleteUser = await prisma.user.delete({
                where: {
                    id: id,
                },
            });
            return true;
        } catch {
            return false;
        }
    }
}

export default new UserRepository();
