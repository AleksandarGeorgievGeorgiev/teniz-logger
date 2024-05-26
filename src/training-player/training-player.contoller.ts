import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { TrainingPlayerService } from "./training-player.service";
import { Prisma, TrainingPlayer } from "@prisma/client";

@Controller("training-player")
export class TrainingPlayerController {
  constructor(private readonly trainingPlayerService: TrainingPlayerService) {}

  @Post()
  create(
    @Body()
    trainingPlayerCreateDto: Prisma.TrainingPlayerCreateInput
  ): Promise<TrainingPlayer> {
    return this.trainingPlayerService.create(trainingPlayerCreateDto);
  }

  @Get()
  findAll(): Promise<TrainingPlayer[]> {
    return this.trainingPlayerService.findAll();
  }

  @Get(":id")
  findOne(id: string): Promise<TrainingPlayer> {
    return this.trainingPlayerService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateTrainingPlayerDto: Prisma.TrainingPlayerUpdateInput
  ): Promise<TrainingPlayer> {
    return this.trainingPlayerService.update(id, updateTrainingPlayerDto);
  }

  @Delete(":id")
  delete(@Param("id") id: string): Promise<TrainingPlayer> {
    return this.trainingPlayerService.delete(id);
  }
}
