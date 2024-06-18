import { BaseEntityService } from '@webpackages/core';
import { Message } from './entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService extends BaseEntityService<Message> {
  constructor(@InjectRepository(Message) repo: Repository<Message>) {
    super(repo);
  }
}
