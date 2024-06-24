import { OrganizationView } from '@webpackages/entities';
import { CreateOrderDto } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class OrderOrganizationDto extends CreateOrderDto<OrganizationView>([
  'name',
  'managerUsername',
]) {}
