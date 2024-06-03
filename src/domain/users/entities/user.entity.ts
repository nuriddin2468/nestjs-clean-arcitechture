import * as bcrypt from 'bcrypt';
import { NonFunctionProperties } from '@domain/_shared/utils/types';

export class UserEntity {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
  role: Role;
  birthdate?: Date;
  sex: Sex;
  schoolId: number;

  deletedAt?: Date;
  createdAt: Date;
  updatedAt: Date;

  constructor(user: NonFunctionProperties<UserEntity>) {
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.phone = user.phone;
    this.password = user.password;
    this.role = user.role;
    this.birthdate = user.birthdate;
    this.sex = user.sex;
    this.schoolId = user.schoolId;

    this.deletedAt = user.deletedAt;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }

  isAdmin() {
    return this.role === Role.admin;
  }

  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 8);
    return this;
  }
}

export enum Role {
  admin = 'admin',
  director = 'director',
  administrator = 'administrator',
  teacher = 'teacher',
  student = 'student',
}

export enum Sex {
  male = 'male',
  female = 'female',
}
