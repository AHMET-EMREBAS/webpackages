import { OrganizationView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryOrganizationDto
  extends BaseQueryDto
  implements QueryDto<OrganizationView>
{
  @QueryProperty() name: string;
  @QueryProperty() managerId: string;
  @QueryProperty() managerActive: string;
  @QueryProperty() managerUsername: string;
}
