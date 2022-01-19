import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { User3ServiceBase } from "./base/user3.service.base";

@Injectable()
export class User3Service extends User3ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
