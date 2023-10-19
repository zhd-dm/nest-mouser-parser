/*
  Warnings:

  - You are about to drop the `ManufacturerList` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ManufacturerList";

-- CreateTable
CREATE TABLE "ManufacturerNames" (
    "automatically_id" SERIAL NOT NULL,
    "manufacturer_name" VARCHAR(100) NOT NULL,
    "last_updated" DATE NOT NULL,

    CONSTRAINT "ManufacturerNames_pkey" PRIMARY KEY ("automatically_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ManufacturerNames_manufacturer_name_key" ON "ManufacturerNames"("manufacturer_name");
