import { Injectable } from '@nestjs/common';
import { BehaviorSubject, takeWhile } from 'rxjs';
import { EventEmitter } from 'events';

let notificationID = 0;

export type CommonNotification = {
  id: number;
  message: string;
};

@Injectable({
  durable: true,
})
export class CommonNotificationService {
  protected readonly subject$ = new BehaviorSubject<string | null>(null);

  protected readonly event$ = new EventEmitter();

  pub(message = 'None') {
    this.subject$.next(`${message} | ${notificationID++}`);
  }

  sub() {
    return this.subject$.pipe(takeWhile((e) => e != null));
  }
}
