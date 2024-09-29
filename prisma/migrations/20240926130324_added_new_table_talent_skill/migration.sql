/*
  Warnings:

  - You are about to drop the column `skill` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `talentId` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `verified` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `resume` on the `Talent` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Skill` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Skill` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Skill" DROP CONSTRAINT "Skill_talentId_fkey";

-- AlterTable
ALTER TABLE "Skill" DROP COLUMN "skill",
DROP COLUMN "talentId",
DROP COLUMN "verified",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Talent" DROP COLUMN "resume";

-- CreateTable
CREATE TABLE "TalentSkill" (
    "id" TEXT NOT NULL,
    "skillId" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "talentId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TalentSkill_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Skill_name_key" ON "Skill"("name");

-- AddForeignKey
ALTER TABLE "TalentSkill" ADD CONSTRAINT "TalentSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TalentSkill" ADD CONSTRAINT "TalentSkill_talentId_fkey" FOREIGN KEY ("talentId") REFERENCES "Talent"("id") ON DELETE SET NULL ON UPDATE CASCADE;
