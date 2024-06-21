import { Phone } from '@webpackages/entities';
import { BaseQueryDto, QueryDto, QueryProperty } from '@webpackages/query';
import { Exclude } from 'class-transformer';

@Exclude()
export class QueryPhoneDto extends BaseQueryDto implements QueryDto<Phone> {}
