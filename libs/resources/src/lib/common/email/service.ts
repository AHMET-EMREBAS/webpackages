import { BaseEntityService } from '@webpackages/core';
import { Email } from './entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService extends BaseEntityService<Email> {
  constructor(@InjectRepository(Email) repo: Repository<Email>) {
    super(repo);
  }
}
