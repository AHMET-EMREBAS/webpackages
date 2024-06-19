import { Body, Controller, Sse } from '@nestjs/common';
import { BehaviorSubject, of } from 'rxjs';

const value$ = new BehaviorSubject<string>('');

let count = 1;

setInterval(() => {
  count++;

  value$.next(count + '');
}, 3000);

@Controller()
export class AppController {
  @Sse('clock')
  alive() {
    return value$;
  }
}
