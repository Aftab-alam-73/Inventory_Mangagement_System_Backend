/*
  Warnings:

  - Added the required column `cutomerId` to the `Bills` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bills" ADD COLUMN     "cutomerId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Bills" ADD CONSTRAINT "Bills_cutomerId_fkey" FOREIGN KEY ("cutomerId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
