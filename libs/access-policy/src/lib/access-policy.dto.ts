import { AccessPolicy, Operation, ResourceNames } from '@webpackages/types';
import { Property, Dto } from '@webpackages/property';

@Dto()
export class OperationDto implements Operation {
  @Property({ type: 'boolean', example: true }) manage: boolean;
  @Property({ type: 'boolean', example: true }) read: boolean;
  @Property({ type: 'boolean', example: true }) write: boolean;
  @Property({ type: 'boolean', example: true }) update: boolean;
  @Property({ type: 'boolean', example: true }) delete: boolean;
}

@Dto()
export class AccessPolicyDto implements Required<AccessPolicy<ResourceNames>> {
  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  AccessToken: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  Address: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  Category: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  Department: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  Email: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  Event: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  Img: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  Inbox: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  Message: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  Notification: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  Phone: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  Profile: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  Session: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  CustomerAddress: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  CustomerEmail: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  CustomerImg: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  CustomerPhone: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  CustomerProfile: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  Customer: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  Cart: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  Discount: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  Manufacturer: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  Order: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  PriceLevel: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  Price: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  ProductImg: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  Product: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  Purchase: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  Quantity: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  SerialNumber: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  SkuDetail: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  Sku: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  Store: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  Supplier: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  Project: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  Sprint: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  Task: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  ClockIn: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  UserAddress: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  UserEmail: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  UserImg: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  UserPhone: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  UserProfile: OperationDto;

  @Property({
    type: 'object',
    target: OperationDto,
    example: {
      manage: true,
    },
  })
  User: OperationDto;

  /**
   * Read, write, update, delete resources
   */
  @Property({ type: 'boolean' }) Admin: true;

  /**
   * Read, write, update, delete resources
   */
  @Property({ type: 'boolean' }) Root: true;

  /**
   * Read resources
   */
  @Property({ type: 'boolean' }) Reader: true;
}
