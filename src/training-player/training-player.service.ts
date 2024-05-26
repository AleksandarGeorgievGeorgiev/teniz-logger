import { Injectable } from "@nestjs/common";
import { Prisma, TrainingPlayer } from "@prisma/client";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class TrainingPlayerService {
  constructor(private prisma: PrismaService) {}

  async create(
    createTrainingPlayerDto: Prisma.TrainingPlayerCreateInput
  ): Promise<TrainingPlayer> {
    return await this.prisma.trainingPlayer.create({
      data: createTrainingPlayerDto,
    });
  }

  async findAll(): Promise<TrainingPlayer[]> {
    return await this.prisma.trainingPlayer.findMany();
  }

  async findOne(id: string): Promise<TrainingPlayer> {
    return await this.prisma.trainingPlayer.findFirstOrThrow({
      where: { id },
    });
  }

  async update(
    id: string,
    updateTrainingPlayerDto: Prisma.TrainingPlayerUpdateInput
  ): Promise<TrainingPlayer> {
    return await this.prisma.trainingPlayer.update({
      where: { id },
      data: updateTrainingPlayerDto,
    });
  }

  async delete(id: string): Promise<TrainingPlayer> {
    return await this.prisma.trainingPlayer.delete({
      where: { id },
    });
  }
}
