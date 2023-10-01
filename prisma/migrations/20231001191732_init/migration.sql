-- CreateTable
CREATE TABLE "ManufacturerList" (
    "automaticallyId" SERIAL NOT NULL,
    "manufacturerName" TEXT NOT NULL,
    "manufacturerId" INTEGER,

    CONSTRAINT "ManufacturerList_pkey" PRIMARY KEY ("automaticallyId")
);

-- CreateIndex
CREATE UNIQUE INDEX "ManufacturerList_manufacturerName_key" ON "ManufacturerList"("manufacturerName");
