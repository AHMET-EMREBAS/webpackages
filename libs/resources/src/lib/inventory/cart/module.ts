import { Module, OnModuleInit } from '@nestjs/common';
import { CartController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './entities';
import { Repository } from 'typeorm';
import { CartService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Cart])],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule implements OnModuleInit {
  constructor(
    @InjectRepository(Cart) protected readonly repo: Repository<Cart>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
