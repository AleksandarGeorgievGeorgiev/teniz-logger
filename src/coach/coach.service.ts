import { Injectable } from "@nestjs/common";
import { Coach, Prisma } from "@prisma/client";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class CoachService {
  constructor(private prisma: PrismaService) {}

  async create(createCoachDto: Prisma.CoachCreateInput): Promise<Coach> {
    return await this.prisma.coach.create({
      data: createCoachDto,
    });
  }

  async findAll(): Promise<Coach[]> {
    return await this.prisma.coach.findMany();
  }

  async findOne(id: string): Promise<Coach> {
    return await this.prisma.coach.findFirstOrThrow({
      where: { id: id },
    });
  }

  async update(
    id: string,
    updateCoachDto: Prisma.CoachUpdateInput
  ): Promise<Coach> {
    return await this.prisma.coach.update({
      where: { id },
      data: updateCoachDto,
    });
  }

  async delete(id: string): Promise<Coach> {
    return await this.prisma.coach.delete({
      where: { id: id },
    });
  }
}
