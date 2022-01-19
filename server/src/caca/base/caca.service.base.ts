import { PrismaService } from "nestjs-prisma";
import { Prisma, Caca } from "@prisma/client";

export class CacaServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CacaFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CacaFindManyArgs>
  ): Promise<number> {
    return this.prisma.caca.count(args);
  }

  async findMany<T extends Prisma.CacaFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CacaFindManyArgs>
  ): Promise<Caca[]> {
    return this.prisma.caca.findMany(args);
  }
  async findOne<T extends Prisma.CacaFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CacaFindUniqueArgs>
  ): Promise<Caca | null> {
    return this.prisma.caca.findUnique(args);
  }
  async create<T extends Prisma.CacaCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CacaCreateArgs>
  ): Promise<Caca> {
    return this.prisma.caca.create<T>(args);
  }
  async update<T extends Prisma.CacaUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CacaUpdateArgs>
  ): Promise<Caca> {
    return this.prisma.caca.update<T>(args);
  }
  async delete<T extends Prisma.CacaDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CacaDeleteArgs>
  ): Promise<Caca> {
    return this.prisma.caca.delete(args);
  }
}
