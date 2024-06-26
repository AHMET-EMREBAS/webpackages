import { OrganizationView } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryOrganizationDto
  extends BaseQueryDto
  implements QueryDto<OrganizationView>
{
  @QueryProperty() name: string;
  @QueryProperty() managerEmployeeId: string;
  @QueryProperty() managerEmployeeActive: string;
  @QueryProperty() managerEmployeeUsername: string;
}
