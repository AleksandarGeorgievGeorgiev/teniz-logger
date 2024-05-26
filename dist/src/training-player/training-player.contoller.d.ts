import { TrainingPlayerService } from "./training-player.service";
import { Prisma, TrainingPlayer } from "@prisma/client";
export declare class TrainingPlayerController {
    private readonly trainingPlayerService;
    constructor(trainingPlayerService: TrainingPlayerService);
    create(trainingPlayerCreateDto: Prisma.TrainingPlayerCreateInput): Promise<TrainingPlayer>;
    findAll(): Promise<TrainingPlayer[]>;
    findOne(id: string): Promise<TrainingPlayer>;
    update(id: string, updateTrainingPlayerDto: Prisma.TrainingPlayerUpdateInput): Promise<TrainingPlayer>;
    delete(id: string): Promise<TrainingPlayer>;
}
