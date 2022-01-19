import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { User3ResolverBase } from "./base/user3.resolver.base";
import { User3 } from "./base/User3";
import { User3Service } from "./user3.service";

@graphql.Resolver(() => User3)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class User3Resolver extends User3ResolverBase {
  constructor(
    protected readonly service: User3Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
