import { OrganizationView } from '@webpackages/entities';
import { SearchDto, SearchProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';
import { FindOptionsWhere } from 'typeorm';

@Exclude()
export class SearchOrganizationDto implements SearchDto<OrganizationView> {
  @SearchProperty<OrganizationView>(['name', 'managerUsername'])
  search: FindOptionsWhere<OrganizationView>;
}
