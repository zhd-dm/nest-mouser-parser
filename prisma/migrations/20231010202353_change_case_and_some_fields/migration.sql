/*
  Warnings:

  - The primary key for the `ManufacturerList` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `automaticallyId` on the `ManufacturerList` table. All the data in the column will be lost.
  - You are about to drop the column `manufacturerId` on the `ManufacturerList` table. All the data in the column will be lost.
  - You are about to drop the column `manufacturerName` on the `ManufacturerList` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[manufacturer_name]` on the table `ManufacturerList` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `last_updated` to the `ManufacturerList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `manufacturer_name` to the `ManufacturerList` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "ManufacturerList_manufacturerName_key";

-- AlterTable
ALTER TABLE "ManufacturerList" DROP CONSTRAINT "ManufacturerList_pkey",
DROP COLUMN "automaticallyId",
DROP COLUMN "manufacturerId",
DROP COLUMN "manufacturerName",
ADD COLUMN     "automatically_id" SERIAL NOT NULL,
ADD COLUMN     "last_updated" TIMESTAMPTZ NOT NULL,
ADD COLUMN     "manufacturer_name" VARCHAR(100) NOT NULL,
ADD CONSTRAINT "ManufacturerList_pkey" PRIMARY KEY ("automatically_id");

-- CreateIndex
CREATE UNIQUE INDEX "ManufacturerList_manufacturer_name_key" ON "ManufacturerList"("manufacturer_name");
