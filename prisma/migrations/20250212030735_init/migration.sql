-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "groupcode" TEXT,
    "rsvpstatus" TEXT NOT NULL DEFAULT 'Pending',
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT,
    "foodpreference" TEXT DEFAULT 'None',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
