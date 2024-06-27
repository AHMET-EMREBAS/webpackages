import { Module } from '@nestjs/common';
import { resourceList } from './resource-list';

@Module({ imports: [...resourceList] })
export class ResourceModule {}
