import { Injectable } from "@nestjs/common";
import { Player, Prisma } from "@prisma/client";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class PlayerService {
  constructor(private prisma: PrismaService) {}

  async create(createPlayerDto: Prisma.PlayerCreateInput): Promise<Player> {
    return await this.prisma.player.create({
      data: createPlayerDto,
    });
  }

  async findAll(): Promise<Player[]> {
    return await this.prisma.player.findMany();
  }

  async findOne(id: string): Promise<Player> {
    return await this.prisma.player.findFirstOrThrow({
      where: { id: id },
    });
  }

  async update(
    id: string,
    updatePlayerDto: Prisma.PlayerUpdateInput
  ): Promise<Player> {
    return await this.prisma.player.update({
      where: { id },
      data: updatePlayerDto,
    });
  }

  async delete(id: string): Promise<Player> {
    return await this.prisma.player.delete({
      where: { id: id },
    });
  }
}
