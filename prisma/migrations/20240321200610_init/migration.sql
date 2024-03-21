/*
  Warnings:

  - You are about to drop the column `cutomerId` on the `Bills` table. All the data in the column will be lost.
  - Added the required column `customerId` to the `Bills` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bills" DROP COLUMN "cutomerId",
ADD COLUMN     "customerId" INTEGER NOT NULL;
