import { Injectable } from "@nestjs/common";
import { Prisma, Training } from "@prisma/client";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class TrainingService {
  constructor(private prisma: PrismaService) {}

  async create(
    createTrainingDto: Prisma.TrainingCreateInput
  ): Promise<Training> {
    return await this.prisma.training.create({
      data: createTrainingDto,
    });
  }

  async findAll(): Promise<Training[]> {
    return await this.prisma.training.findMany();
  }

  async findOne(id: string): Promise<Training> {
    return await this.prisma.training.findFirstOrThrow({
      where: { id },
    });
  }

  async update(
    id: string,
    updateTrainingDto: Prisma.TrainingUpdateInput
  ): Promise<Training> {
    return await this.prisma.training.update({
      where: { id },
      data: updateTrainingDto,
    });
  }

  async delete(id: string): Promise<Training> {
    return await this.prisma.training.delete({
      where: { id },
    });
  }
}
