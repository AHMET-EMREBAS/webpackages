import { Exclude } from 'class-transformer';
import { QueryProfileDto } from '../../../common';

@Exclude()
export class QueryUserProfileDto extends QueryProfileDto {}
