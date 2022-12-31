import { Module } from '@nestjs/common';
import { Example1Controller } from './example1.controller';

@Module({
  controllers: [Example1Controller],
})
export class Example1Module {}
