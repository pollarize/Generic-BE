import { Test, TestingModule } from '@nestjs/testing';
import { Example1Controller } from './example1.controller';

describe('Example1Controller', () => {
  let controller: Example1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Example1Controller],
    }).compile();

    controller = module.get<Example1Controller>(Example1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
