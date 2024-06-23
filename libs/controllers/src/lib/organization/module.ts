import { Module, OnModuleInit } from '@nestjs/common';
import { OrganizationController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Organization, OrganizationView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { OrganizationService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Organization, OrganizationView])],
  controllers: [OrganizationController],
  providers: [OrganizationService],
})
export class OrganizationModule implements OnModuleInit {
  constructor(
    @InjectRepository(Organization)
    protected readonly repo: Repository<Organization>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
