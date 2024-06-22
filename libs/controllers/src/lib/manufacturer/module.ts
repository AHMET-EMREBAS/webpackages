import { Module, OnModuleInit } from '@nestjs/common';
import { ManufacturerController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Manufacturer, ManufacturerView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { ManufacturerService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Manufacturer, ManufacturerView])],
  controllers: [ManufacturerController],
  providers: [ManufacturerService],
})
export class ManufacturerModule implements OnModuleInit {
  constructor(
    @InjectRepository(Manufacturer)
    protected readonly repo: Repository<Manufacturer>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
