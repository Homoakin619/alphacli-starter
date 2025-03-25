import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  pingHello() {
    return { message: "Welcome to Nest Starter Kit 🚀" };
  }
}
