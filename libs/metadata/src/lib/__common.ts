import { PropertyOptions } from '@webpackages/types';

type Options = Partial<PropertyOptions>;

export const Property = {
  string(options: Options = {}): Options {
    return {
      type: 'string',
      minLength: 3,
      maxLength: 100,
      example: 'Sample String',
      ...options,
    };
  },
  number(options: Options = {}): Options {
    return {};
  },
  long(options: Options = {}): Options {
    return Property.string({ ...options, minLength: 0, maxLength: 1000 });
  },
  password(options: Options = {}): Options {
    return Property.string({ ...options, format: 'password' });
  },
  currency(options: Options = {}): Options {
    return {};
  },
  integer(options: Options = {}): Options {
    return {};
  },
  stringList(options: Options = {}): Options {
    return {};
  },
  enumOne(options: Options = {}): Options {
    return {};
  },
  enumMany(options: Options = {}): Options {
    return {};
  },
  date(options: Options = {}): Options {
    return {};
  },
  boolean(options: Options = {}): Options {
    return {};
  },
  object(options: Options = {}): Options {
    return {};
  },
  emailProperty(options: Options): Options {
    return {
      type: 'string',
    };
  },
};
