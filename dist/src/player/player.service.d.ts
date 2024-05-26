import { Player, Prisma } from "@prisma/client";
import { PrismaService } from "prisma/prisma.service";
export declare class PlayerService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPlayerDto: Prisma.PlayerCreateInput): Promise<Player>;
    findAll(): Promise<Player[]>;
    findOne(id: string): Promise<Player>;
    update(id: string, updatePlayerDto: Prisma.PlayerUpdateInput): Promise<Player>;
    delete(id: string): Promise<Player>;
}
