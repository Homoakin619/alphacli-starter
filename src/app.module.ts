import { Logger, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import config from "./config/configuration";
import { ConfigModule, ConfigService } from "@nestjs/config";



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
  ],

  controllers: [AppController],
  
  providers: [
    AppService,
    Logger,
    {
      provide: 'CONFIG',
      useClass: ConfigService,
    }
  ],
})
export class AppModule {}
