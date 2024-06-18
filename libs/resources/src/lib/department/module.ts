import { Module, OnModuleInit } from '@nestjs/common';
import { DepartmentController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Department } from './entities';
import { Repository } from 'typeorm';
import { DepartmentService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Department])],
  controllers: [DepartmentController],
  providers: [DepartmentService],
})
export class DepartmentModule implements OnModuleInit {
  constructor(
    @InjectRepository(Department)
    protected readonly repo: Repository<Department>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
