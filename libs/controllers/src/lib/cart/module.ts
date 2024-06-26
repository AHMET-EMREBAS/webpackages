import { Module, OnModuleInit } from '@nestjs/common';
import { CartController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Cart, CartView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { CartService } from './service';
import { Customer, CustomerView } from '@webpackages/entities';
import { User, UserView } from '@webpackages/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Cart,
      CartView,
      Customer,
      CustomerView,
      User,
      UserView,
    ]),
  ],
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
