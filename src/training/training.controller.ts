import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { TrainingService } from "./training.service";
import { Prisma, Training } from "@prisma/client";

@Controller("training")
export class TrainingController {
  constructor(private readonly trainingService: TrainingService) {}

  @Post()
  create(
    @Body() createTrainingDto: Prisma.TrainingCreateInput
  ): Promise<Training> {
    return this.trainingService.create(createTrainingDto);
  }

  @Get()
  findAll(): Promise<Training[]> {
    return this.trainingService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Training> {
    return this.trainingService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateTrainingDto: Prisma.TrainingUpdateInput
  ): Promise<Training> {
    return this.trainingService.update(id, updateTrainingDto);
  }

  @Delete(":id")
  delete(@Param("id") id: string): Promise<Training> {
    return this.trainingService.delete(id);
  }
}
