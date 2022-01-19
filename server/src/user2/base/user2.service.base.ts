import { PrismaService } from "nestjs-prisma";
import { Prisma, User2 } from "@prisma/client";

export class User2ServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.User2FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.User2FindManyArgs>
  ): Promise<number> {
    return this.prisma.user2.count(args);
  }

  async findMany<T extends Prisma.User2FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.User2FindManyArgs>
  ): Promise<User2[]> {
    return this.prisma.user2.findMany(args);
  }
  async findOne<T extends Prisma.User2FindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.User2FindUniqueArgs>
  ): Promise<User2 | null> {
    return this.prisma.user2.findUnique(args);
  }
  async create<T extends Prisma.User2CreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.User2CreateArgs>
  ): Promise<User2> {
    return this.prisma.user2.create<T>(args);
  }
  async update<T extends Prisma.User2UpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.User2UpdateArgs>
  ): Promise<User2> {
    return this.prisma.user2.update<T>(args);
  }
  async delete<T extends Prisma.User2DeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.User2DeleteArgs>
  ): Promise<User2> {
    return this.prisma.user2.delete(args);
  }
}
