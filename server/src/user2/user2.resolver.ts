import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { User2ResolverBase } from "./base/user2.resolver.base";
import { User2 } from "./base/User2";
import { User2Service } from "./user2.service";

@graphql.Resolver(() => User2)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class User2Resolver extends User2ResolverBase {
  constructor(
    protected readonly service: User2Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
