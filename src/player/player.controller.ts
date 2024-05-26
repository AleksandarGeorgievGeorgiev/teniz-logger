import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { PlayerService } from "./player.service";
import { Player, Prisma } from "@prisma/client";

@Controller("player")
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post()
  create(@Body() createPlayerDto: Prisma.PlayerCreateInput): Promise<Player> {
    return this.playerService.create(createPlayerDto);
  }

  @Get()
  findAll(): Promise<Player[]> {
    return this.playerService.findAll();
  }

  @Get(":id")
  findOne(id: string): Promise<Player> {
    return this.playerService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updatePlayerDto: Prisma.PlayerUpdateInput
  ): Promise<Player> {
    return this.playerService.update(id, updatePlayerDto);
  }

  @Delete(":id")
  delete(@Param("id") id: string): Promise<Player> {
    return this.playerService.delete(id);
  }
}
