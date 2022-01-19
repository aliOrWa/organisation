import { Module } from "@nestjs/common";
import { CacaModuleBase } from "./base/caca.module.base";
import { CacaService } from "./caca.service";
import { CacaController } from "./caca.controller";
import { CacaResolver } from "./caca.resolver";

@Module({
  imports: [CacaModuleBase],
  controllers: [CacaController],
  providers: [CacaService, CacaResolver],
  exports: [CacaService],
})
export class CacaModule {}
