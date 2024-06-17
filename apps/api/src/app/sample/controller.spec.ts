import { Test, TestingModule } from '@nestjs/testing';
import { SampleController } from './controller';

describe('SampleController', () => {
  let controller: SampleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SampleController],
      providers: [],
    }).compile();

    controller = module.get<SampleController>(SampleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
