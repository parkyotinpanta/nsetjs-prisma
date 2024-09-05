/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `api` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `api_email_key` ON `api`(`email`);
