import { Module, OnModuleInit } from '@nestjs/common';
import { PurchaseOrderController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseOrder, PurchaseOrderView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { PurchaseOrderService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([PurchaseOrder, PurchaseOrderView])],
  controllers: [PurchaseOrderController],
  providers: [PurchaseOrderService],
})
export class PurchaseOrderModule implements OnModuleInit {
  constructor(
    @InjectRepository(PurchaseOrder)
    protected readonly repo: Repository<PurchaseOrder>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
