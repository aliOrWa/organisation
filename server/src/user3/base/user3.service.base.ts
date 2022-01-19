import { PrismaService } from "nestjs-prisma";
import { Prisma, User3 } from "@prisma/client";

export class User3ServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.User3FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.User3FindManyArgs>
  ): Promise<number> {
    return this.prisma.user3.count(args);
  }

  async findMany<T extends Prisma.User3FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.User3FindManyArgs>
  ): Promise<User3[]> {
    return this.prisma.user3.findMany(args);
  }
  async findOne<T extends Prisma.User3FindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.User3FindUniqueArgs>
  ): Promise<User3 | null> {
    return this.prisma.user3.findUnique(args);
  }
  async create<T extends Prisma.User3CreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.User3CreateArgs>
  ): Promise<User3> {
    return this.prisma.user3.create<T>(args);
  }
  async update<T extends Prisma.User3UpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.User3UpdateArgs>
  ): Promise<User3> {
    return this.prisma.user3.update<T>(args);
  }
  async delete<T extends Prisma.User3DeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.User3DeleteArgs>
  ): Promise<User3> {
    return this.prisma.user3.delete(args);
  }
}
