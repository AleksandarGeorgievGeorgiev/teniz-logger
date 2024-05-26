import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CoachService } from "./coach.service";
import { Coach, Prisma } from "@prisma/client";

@Controller("coach")
export class CoachController {
  constructor(private readonly coachService: CoachService) {}

  @Post()
  create(@Body() createCoachDto: Prisma.CoachCreateInput): Promise<Coach> {
    return this.coachService.create(createCoachDto);
  }

  @Get()
  findAll(): Promise<Coach[]> {
    return this.coachService.findAll();
  }

  @Get(":id")
  findOne(id: string): Promise<Coach> {
    return this.coachService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCoachDto: Prisma.CoachUpdateInput
  ): Promise<Coach> {
    return this.coachService.update(id, updateCoachDto);
  }

  @Delete(":id")
  delete(@Param("id") id: string): Promise<Coach> {
    return this.coachService.delete(id);
  }
}
