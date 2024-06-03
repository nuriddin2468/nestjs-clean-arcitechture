import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export const Sex = {
    male: "male",
    female: "female"
} as const;
export type Sex = (typeof Sex)[keyof typeof Sex];
export const Role = {
    admin: "admin",
    director: "director",
    administrator: "administrator",
    teacher: "teacher",
    student: "student"
} as const;
export type Role = (typeof Role)[keyof typeof Role];
export type School = {
    id: Generated<number>;
    title: string;
};
export type User = {
    id: Generated<number>;
    firstName: string;
    lastName: string;
    phone: string;
    password: string;
    role: Generated<Role>;
    birthdate: Timestamp | null;
    sex: Generated<Sex>;
    schoolId: number;
    deletedAt: Timestamp | null;
    createdAt: Generated<Timestamp>;
    updatedAt: Generated<Timestamp>;
};
export type DB = {
    School: School;
    User: User;
};
