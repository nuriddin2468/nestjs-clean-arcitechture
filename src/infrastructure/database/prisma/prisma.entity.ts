import { PrismaClient } from '@prisma/client';
import kyselyExtension from 'prisma-extension-kysely';
import {
  CamelCasePlugin,
  Kysely,
  PostgresAdapter,
  PostgresIntrospector,
  PostgresQueryCompiler,
} from 'kysely';
import { DB } from '../../../../prisma/generated/types';

export const PrismaEntity = new PrismaClient().$extends(
  kyselyExtension({
    kysely: (driver) =>
      new Kysely<DB>({
        dialect: {
          // This is where the magic happens!
          createDriver: () => driver,
          // Don't forget to customize these to match your database!
          createAdapter: () => new PostgresAdapter(),
          createIntrospector: (db) => new PostgresIntrospector(db),
          createQueryCompiler: () => new PostgresQueryCompiler(),
        },
        plugins: [
          // Add your favorite plugins here!
          new CamelCasePlugin(),
        ],
      }),
  }),
);

export type PrismaType = typeof PrismaEntity;

export const PRISMA = Symbol('prisma');
