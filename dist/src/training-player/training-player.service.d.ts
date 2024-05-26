import { Prisma, TrainingPlayer } from "@prisma/client";
import { PrismaService } from "prisma/prisma.service";
export declare class TrainingPlayerService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTrainingPlayerDto: Prisma.TrainingPlayerCreateInput): Promise<TrainingPlayer>;
    findAll(): Promise<TrainingPlayer[]>;
    findOne(id: string): Promise<TrainingPlayer>;
    update(id: string, updateTrainingPlayerDto: Prisma.TrainingPlayerUpdateInput): Promise<TrainingPlayer>;
    delete(id: string): Promise<TrainingPlayer>;
}
