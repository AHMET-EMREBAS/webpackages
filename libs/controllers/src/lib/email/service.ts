import { BaseEntityService } from '@webpackages/database';
import { Email, EmailView } from '@webpackages/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService extends BaseEntityService<Email, EmailView> {
  constructor(
    @InjectRepository(Email) repo: Repository<Email>,
    @InjectRepository(EmailView) view: Repository<EmailView>
  ) {
    super(repo, view);
  }
}
