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
import { CreateUser3Args } from "./CreateUser3Args";
import { UpdateUser3Args } from "./UpdateUser3Args";
import { DeleteUser3Args } from "./DeleteUser3Args";
import { User3FindManyArgs } from "./User3FindManyArgs";
import { User3FindUniqueArgs } from "./User3FindUniqueArgs";
import { User3 } from "./User3";
import { User3Service } from "../user3.service";

@graphql.Resolver(() => User3)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class User3ResolverBase {
  constructor(
    protected readonly service: User3Service,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "User3",
    action: "read",
    possession: "any",
  })
  async _user3sMeta(
    @graphql.Args() args: User3FindManyArgs
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

  @graphql.Query(() => [User3])
  @nestAccessControl.UseRoles({
    resource: "User3",
    action: "read",
    possession: "any",
  })
  async user3s(
    @graphql.Args() args: User3FindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User3[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "User3",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => User3, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User3",
    action: "read",
    possession: "own",
  })
  async user3(
    @graphql.Args() args: User3FindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User3 | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "User3",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => User3)
  @nestAccessControl.UseRoles({
    resource: "User3",
    action: "create",
    possession: "any",
  })
  async createUser3(
    @graphql.Args() args: CreateUser3Args,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User3> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "User3",
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
        `providing the properties: ${properties} on ${"User3"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => User3)
  @nestAccessControl.UseRoles({
    resource: "User3",
    action: "update",
    possession: "any",
  })
  async updateUser3(
    @graphql.Args() args: UpdateUser3Args,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User3 | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "User3",
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
        `providing the properties: ${properties} on ${"User3"} update is forbidden for roles: ${roles}`
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

  @graphql.Mutation(() => User3)
  @nestAccessControl.UseRoles({
    resource: "User3",
    action: "delete",
    possession: "any",
  })
  async deleteUser3(
    @graphql.Args() args: DeleteUser3Args
  ): Promise<User3 | null> {
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
