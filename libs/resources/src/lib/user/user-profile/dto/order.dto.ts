import { Exclude } from 'class-transformer';
import {OrderProfileDto} from '../../../common'

@Exclude()
export class OrderUserProfileDto extends OrderProfileDto {}
