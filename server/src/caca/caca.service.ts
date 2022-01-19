import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CacaServiceBase } from "./base/caca.service.base";

@Injectable()
export class CacaService extends CacaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
