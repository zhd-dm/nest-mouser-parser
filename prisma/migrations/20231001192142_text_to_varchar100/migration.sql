/*
  Warnings:

  - You are about to alter the column `manufacturerName` on the `ManufacturerList` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.

*/
-- AlterTable
ALTER TABLE "ManufacturerList" ALTER COLUMN "manufacturerName" SET DATA TYPE VARCHAR(100);
