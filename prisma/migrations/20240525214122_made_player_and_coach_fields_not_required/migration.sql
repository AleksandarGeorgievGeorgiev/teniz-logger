/*
  Warnings:

  - Added the required column `email` to the `Coach` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coach" ADD COLUMN     "email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Player" ALTER COLUMN "difficultyLevel" DROP NOT NULL;
