import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { PlayerModule } from "./player/player.module";
import { CoachModule } from "./coach/coach.module";
import { TrainingModule } from "./training/training.module";

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ENV ? `./environment/.env.${ENV}` : `./environment/.env`,
    }),
    PlayerModule,
    CoachModule,
    TrainingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
