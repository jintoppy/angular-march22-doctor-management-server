import { SetMetadata } from '@nestjs/common';
import { Role as RoleEnum } from '../models/role';

export const Roles = (...roles: RoleEnum[]) => SetMetadata('roles', roles);