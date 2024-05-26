import { CoachService } from "./coach.service";
import { Coach, Prisma } from "@prisma/client";
export declare class CoachController {
    private readonly coachService;
    constructor(coachService: CoachService);
    create(createCoachDto: Prisma.CoachCreateInput): Promise<Coach>;
    findAll(): Promise<Coach[]>;
    findOne(id: string): Promise<Coach>;
    update(id: string, updateCoachDto: Prisma.CoachUpdateInput): Promise<Coach>;
    delete(id: string): Promise<Coach>;
}
