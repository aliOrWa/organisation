import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DeleteCacaArgs } from "./DeleteCacaArgs";
import { CacaFindManyArgs } from "./CacaFindManyArgs";
import { CacaFindUniqueArgs } from "./CacaFindUniqueArgs";
import { Caca } from "./Caca";
import { CacaService } from "../caca.service";

@graphql.Resolver(() => Caca)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CacaResolverBase {
  constructor(
    protected readonly service: CacaService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Caca",
    action: "read",
    possession: "any",
  })
  async _cacasMeta(
    @graphql.Args() args: CacaFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Caca])
  @nestAccessControl.UseRoles({
    resource: "Caca",
    action: "read",
    possession: "any",
  })
  async cacas(
    @graphql.Args() args: CacaFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Caca[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Caca",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Caca, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Caca",
    action: "read",
    possession: "own",
  })
  async caca(
    @graphql.Args() args: CacaFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Caca | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Caca",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Caca)
  @nestAccessControl.UseRoles({
    resource: "Caca",
    action: "delete",
    possession: "any",
  })
  async deleteCaca(@graphql.Args() args: DeleteCacaArgs): Promise<Caca | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
