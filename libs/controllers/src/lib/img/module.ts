import { Module, OnModuleInit } from '@nestjs/common';
import { ImgController } from './controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Img } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { ImgService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Img])],
  controllers: [ImgController],
  providers: [ImgService],
})
export class ImgModule implements OnModuleInit {
  constructor(
    @InjectRepository(Img) protected readonly repo: Repository<Img>
  ) {}

  async onModuleInit() {
    // Seed
  }
}
