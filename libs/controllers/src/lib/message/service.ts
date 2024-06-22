import { BaseEntityService } from '@webpackages/database';
import { Message, MessageView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService extends BaseEntityService<Message, MessageView> {
  constructor(
    @InjectRepository(Message) repo: Repository<Message>,
    @InjectRepository(MessageView) view: Repository<MessageView>
  ) {
    super(repo, view);
  }
}
