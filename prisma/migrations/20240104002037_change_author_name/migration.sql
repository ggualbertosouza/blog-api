/*
  Warnings:

  - You are about to drop the column `author` on the `posts` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_author_fkey";

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "author",
ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
