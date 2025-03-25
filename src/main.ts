import { NestFactory, Reflector } from "@nestjs/core";
import { AppModule } from "./app.module";
import { json, urlencoded } from "express";
import { ConfigService } from "@nestjs/config";
import { Logger, ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const logger = app.get(Logger);

  app.use(json({ limit: "20mb" }));
  app.use(urlencoded({ limit: "100mb", extended: true }));

  // app.setGlobalPrefix("api/v1");
  
  const port = config.get<string>("PORT") || 3000;


  const server = await app.listen(port);
  server.setTimeout(1200000);
  logger.log("Server started on port " + port);
}

bootstrap();
