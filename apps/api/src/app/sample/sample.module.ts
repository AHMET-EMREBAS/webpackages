import { Module, OnModuleInit } from '@nestjs/common';
import { SampleController } from './sample.controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Sample } from './entities';
import { Repository } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Sample])],
  controllers: [SampleController],
})
export class SampleModule implements OnModuleInit {
  constructor(
    @InjectRepository(Sample) protected readonly repo: Repository<Sample>
  ) {}

  async onModuleInit() {
    setTimeout(async () => {
      await this.repo.save({ name: 'first', dob: new Date('2024-6-10') });
    });
    setTimeout(async () => {
      await this.repo.save({ name: 'second', dob: new Date('2024-6-20') });
    }, 3000);
    setTimeout(async () => {
      await this.repo.save({ name: 'third', dob: new Date('2024-6-25') });
    }, 6000);
  }
}
