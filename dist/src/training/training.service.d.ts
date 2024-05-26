import { Prisma, Training } from "@prisma/client";
import { PrismaService } from "prisma/prisma.service";
export declare class TrainingService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTrainingDto: Prisma.TrainingCreateInput): Promise<Training>;
    findAll(): Promise<Training[]>;
    findOne(id: string): Promise<Training>;
    update(id: string, updateTrainingDto: Prisma.TrainingUpdateInput): Promise<Training>;
    delete(id: string): Promise<Training>;
}
