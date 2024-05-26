import { TrainingService } from "./training.service";
import { Prisma, Training } from "@prisma/client";
export declare class TrainingController {
    private readonly trainingService;
    constructor(trainingService: TrainingService);
    create(createTrainingDto: Prisma.TrainingCreateInput): Promise<Training>;
    findAll(): Promise<Training[]>;
    findOne(id: string): Promise<Training>;
    update(id: string, updateTrainingDto: Prisma.TrainingUpdateInput): Promise<Training>;
    delete(id: string): Promise<Training>;
}
