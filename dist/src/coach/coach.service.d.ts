import { Coach, Prisma } from "@prisma/client";
import { PrismaService } from "prisma/prisma.service";
export declare class CoachService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCoachDto: Prisma.CoachCreateInput): Promise<Coach>;
    findAll(): Promise<Coach[]>;
    findOne(id: string): Promise<Coach>;
    update(id: string, updateCoachDto: Prisma.CoachUpdateInput): Promise<Coach>;
    delete(id: string): Promise<Coach>;
}
