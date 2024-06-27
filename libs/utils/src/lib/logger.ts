import { consoleColor } from './console-color';

export type LogLevel = 'all' | 'debug' | 'error' | 'warn' | 'none';

export class LogConfig {
  private static __level: LogLevel = 'none';

  static level(logLevel?: LogLevel) {
    if (logLevel != undefined) {
      this.__level = logLevel;
    }
    return this.__level;
  }
}

export class Logger {
  constructor(protected readonly context: string) {}

  protected __isNone() {
    return LogConfig.level() === 'none';
  }

  protected __wrap(...msgs: string[]) {
    if (!this.__isNone()) {
      console.log(`[ ${this.context} ] ${msgs} ${consoleColor.reset}`);
    }
  }
  log(...msgs: string[]) {
    this.__wrap(...msgs);
  }

  error(...msgs: string[]) {
    this.__wrap(`${msgs}`);
  }

  warn(...msgs: string[]) {
    console.log(`${consoleColor.fgYellow}${msgs}`);
  }

  debug(...msgs: string[]) {
    this.__wrap(`${consoleColor.bgBlue} ${msgs}`);
  }

  table(obj: any) {
    this.__wrap();
    console.table(obj);
  }
}
