import { Module, OnModuleInit } from '@nestjs/common';
import { SupplierController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Supplier, SupplierView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { SupplierService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Supplier, SupplierView])],
  controllers: [SupplierController],
  providers: [SupplierService],
})
export class SupplierModule implements OnModuleInit {
  constructor(
    @InjectRepository(Supplier) protected readonly repo: Repository<Supplier>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
