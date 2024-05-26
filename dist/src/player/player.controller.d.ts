import { PlayerService } from "./player.service";
import { Player, Prisma } from "@prisma/client";
export declare class PlayerController {
    private readonly playerService;
    constructor(playerService: PlayerService);
    create(createPlayerDto: Prisma.PlayerCreateInput): Promise<Player>;
    findAll(): Promise<Player[]>;
    findOne(id: string): Promise<Player>;
    update(id: string, updatePlayerDto: Prisma.PlayerUpdateInput): Promise<Player>;
    delete(id: string): Promise<Player>;
}
