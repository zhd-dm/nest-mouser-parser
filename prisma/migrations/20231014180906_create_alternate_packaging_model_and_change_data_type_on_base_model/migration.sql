/*
  Warnings:

  - You are about to drop the column `alternate_packagings` on the `ParsedProducts` table. All the data in the column will be lost.
  - Added the required column `attribute_cost` to the `ProductAttribute` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ParsedProducts" DROP COLUMN "alternate_packagings";

-- AlterTable
ALTER TABLE "ProductAttribute" ADD COLUMN     "attribute_cost" VARCHAR(100) NOT NULL;

-- CreateTable
CREATE TABLE "AlternatePackaging" (
    "automatically_id" SERIAL NOT NULL,
    "APMfrPN" VARCHAR(100),
    "parsedProductsMouser_part_number" VARCHAR(50),

    CONSTRAINT "AlternatePackaging_pkey" PRIMARY KEY ("automatically_id")
);

-- AddForeignKey
ALTER TABLE "AlternatePackaging" ADD CONSTRAINT "AlternatePackaging_parsedProductsMouser_part_number_fkey" FOREIGN KEY ("parsedProductsMouser_part_number") REFERENCES "ParsedProducts"("mouser_part_number") ON DELETE SET NULL ON UPDATE CASCADE;
