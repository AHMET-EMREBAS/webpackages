import { Exclude } from 'class-transformer';
import { SearchImgDto } from '../../../common';

@Exclude()
export class SearchProductImgDto extends SearchImgDto {}
