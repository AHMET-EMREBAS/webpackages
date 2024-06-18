import { Module, OnModuleInit } from '@nestjs/common';
import { SampleController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Sample } from './entities';
import { Repository } from 'typeorm';
import { SampleService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Sample])],
  controllers: [SampleController],
  providers: [SampleService],
})
export class SampleModule implements OnModuleInit {
  constructor(
    @InjectRepository(Sample) protected readonly repo: Repository<Sample>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
