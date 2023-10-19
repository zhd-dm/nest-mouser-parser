-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('USD', 'EUR');

-- CreateTable
CREATE TABLE "ParsedProducts" (
    "availability" VARCHAR(50) NOT NULL,
    "data_sheet_url" VARCHAR(200) NOT NULL,
    "descriprion" VARCHAR(300) NOT NULL,
    "factory_stock" INTEGER NOT NULL,
    "image_path" VARCHAR(200),
    "category" VARCHAR(100) NOT NULL,
    "lead_time" INTEGER NOT NULL,
    "lifecycle_status" VARCHAR(50),
    "manufacturer" VARCHAR(100) NOT NULL,
    "manufacturer_part_number" VARCHAR(50) NOT NULL,
    "min" INTEGER NOT NULL,
    "mult" INTEGER NOT NULL,
    "mouser_part_number" VARCHAR(50) NOT NULL,
    "alternate_packagings" VARCHAR(300),
    "product_detail_url" VARCHAR(200) NOT NULL,
    "reeling" BOOLEAN NOT NULL,
    "rohs_status" VARCHAR(50) NOT NULL,
    "suggested_replacement" VARCHAR(100) NOT NULL,
    "multi_sim_blue" INTEGER NOT NULL,
    "availability_in_stock" INTEGER NOT NULL,
    "info_messages" VARCHAR(300)[],

    CONSTRAINT "ParsedProducts_pkey" PRIMARY KEY ("mouser_part_number")
);

-- CreateTable
CREATE TABLE "ProductAttribute" (
    "automatically_id" SERIAL NOT NULL,
    "attribute_name" VARCHAR(100) NOT NULL,
    "attribute_value" VARCHAR(50) NOT NULL,
    "parsedProductsMouser_part_number" VARCHAR(50),

    CONSTRAINT "ProductAttribute_pkey" PRIMARY KEY ("automatically_id")
);

-- CreateTable
CREATE TABLE "PriceBreak" (
    "automatically_id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" VARCHAR(50) NOT NULL,
    "currency" "Currency" NOT NULL,
    "parsedProductsMouser_part_number" VARCHAR(50),

    CONSTRAINT "PriceBreak_pkey" PRIMARY KEY ("automatically_id")
);

-- CreateTable
CREATE TABLE "AvailabilityOnOrder" (
    "automatically_id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "parsedProductsMouser_part_number" VARCHAR(50),

    CONSTRAINT "AvailabilityOnOrder_pkey" PRIMARY KEY ("automatically_id")
);

-- CreateTable
CREATE TABLE "ProductCompliance" (
    "automatically_id" SERIAL NOT NULL,
    "compliance_name" VARCHAR(50) NOT NULL,
    "compliance_value" VARCHAR(100) NOT NULL,
    "parsedProductsMouser_part_number" VARCHAR(50),

    CONSTRAINT "ProductCompliance_pkey" PRIMARY KEY ("automatically_id")
);

-- AddForeignKey
ALTER TABLE "ProductAttribute" ADD CONSTRAINT "ProductAttribute_parsedProductsMouser_part_number_fkey" FOREIGN KEY ("parsedProductsMouser_part_number") REFERENCES "ParsedProducts"("mouser_part_number") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PriceBreak" ADD CONSTRAINT "PriceBreak_parsedProductsMouser_part_number_fkey" FOREIGN KEY ("parsedProductsMouser_part_number") REFERENCES "ParsedProducts"("mouser_part_number") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvailabilityOnOrder" ADD CONSTRAINT "AvailabilityOnOrder_parsedProductsMouser_part_number_fkey" FOREIGN KEY ("parsedProductsMouser_part_number") REFERENCES "ParsedProducts"("mouser_part_number") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCompliance" ADD CONSTRAINT "ProductCompliance_parsedProductsMouser_part_number_fkey" FOREIGN KEY ("parsedProductsMouser_part_number") REFERENCES "ParsedProducts"("mouser_part_number") ON DELETE SET NULL ON UPDATE CASCADE;
