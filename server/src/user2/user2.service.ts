import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { User2ServiceBase } from "./base/user2.service.base";

@Injectable()
export class User2Service extends User2ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
