-- CreateTable
CREATE TABLE "User" (
    "user_id" BIGSERIAL NOT NULL,
    "user" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_updated" TIMESTAMP(3),
    "date_deleted" TIMESTAMP(3),
    "admin" BOOLEAN DEFAULT false,
    "active" BOOLEAN DEFAULT true,
    "banned" TIMESTAMP(3),
    "deleted" BOOLEAN DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_key" ON "User"("user");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
