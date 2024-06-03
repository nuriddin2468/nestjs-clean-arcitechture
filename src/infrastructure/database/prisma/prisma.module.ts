import { Provider } from '@nestjs/common';
import { PRISMA, PrismaEntity } from './prisma.entity';

export const prismaProvider: Provider = {
  provide: PRISMA,
  useValue: PrismaEntity,
};
