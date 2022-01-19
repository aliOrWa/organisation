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
import { CreateUser2Args } from "./CreateUser2Args";
import { UpdateUser2Args } from "./UpdateUser2Args";
import { DeleteUser2Args } from "./DeleteUser2Args";
import { User2FindManyArgs } from "./User2FindManyArgs";
import { User2FindUniqueArgs } from "./User2FindUniqueArgs";
import { User2 } from "./User2";
import { User2Service } from "../user2.service";

@graphql.Resolver(() => User2)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class User2ResolverBase {
  constructor(
    protected readonly service: User2Service,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "User2",
    action: "read",
    possession: "any",
  })
  async _user2sMeta(
    @graphql.Args() args: User2FindManyArgs
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

  @graphql.Query(() => [User2])
  @nestAccessControl.UseRoles({
    resource: "User2",
    action: "read",
    possession: "any",
  })
  async user2s(
    @graphql.Args() args: User2FindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User2[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "User2",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => User2, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User2",
    action: "read",
    possession: "own",
  })
  async user2(
    @graphql.Args() args: User2FindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User2 | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "User2",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => User2)
  @nestAccessControl.UseRoles({
    resource: "User2",
    action: "create",
    possession: "any",
  })
  async createUser2(
    @graphql.Args() args: CreateUser2Args,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User2> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "User2",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"User2"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => User2)
  @nestAccessControl.UseRoles({
    resource: "User2",
    action: "update",
    possession: "any",
  })
  async updateUser2(
    @graphql.Args() args: UpdateUser2Args,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User2 | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "User2",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"User2"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => User2)
  @nestAccessControl.UseRoles({
    resource: "User2",
    action: "delete",
    possession: "any",
  })
  async deleteUser2(
    @graphql.Args() args: DeleteUser2Args
  ): Promise<User2 | null> {
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
