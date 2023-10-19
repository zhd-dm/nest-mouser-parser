-- CreateTable
CREATE TABLE "AppAccount" (
    "account_id" SERIAL NOT NULL,
    "account_name" VARCHAR(300) NOT NULL,
    "account_email" VARCHAR(300) NOT NULL,
    "account_password" VARCHAR(300) NOT NULL,
    "account_first_api_key" VARCHAR(100) NOT NULL,
    "account_second_api_key" VARCHAR(100) NOT NULL,

    CONSTRAINT "AppAccount_pkey" PRIMARY KEY ("account_id")
);

-- CreateTable
CREATE TABLE "MouserAccountApiCall" (
    "call_id" SERIAL NOT NULL,
    "call_time" TIMESTAMP NOT NULL,
    "appAccountAccount_id" INTEGER NOT NULL,

    CONSTRAINT "MouserAccountApiCall_pkey" PRIMARY KEY ("call_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AppAccount_account_email_key" ON "AppAccount"("account_email");

-- CreateIndex
CREATE UNIQUE INDEX "AppAccount_account_first_api_key_key" ON "AppAccount"("account_first_api_key");

-- CreateIndex
CREATE UNIQUE INDEX "AppAccount_account_second_api_key_key" ON "AppAccount"("account_second_api_key");

-- AddForeignKey
ALTER TABLE "MouserAccountApiCall" ADD CONSTRAINT "MouserAccountApiCall_appAccountAccount_id_fkey" FOREIGN KEY ("appAccountAccount_id") REFERENCES "AppAccount"("account_id") ON DELETE RESTRICT ON UPDATE CASCADE;
