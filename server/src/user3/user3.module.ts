import { Module } from "@nestjs/common";
import { User3ModuleBase } from "./base/user3.module.base";
import { User3Service } from "./user3.service";
import { User3Controller } from "./user3.controller";
import { User3Resolver } from "./user3.resolver";

@Module({
  imports: [User3ModuleBase],
  controllers: [User3Controller],
  providers: [User3Service, User3Resolver],
  exports: [User3Service],
})
export class User3Module {}
