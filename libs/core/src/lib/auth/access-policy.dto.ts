import { Exclude } from 'class-transformer';
import { Property } from '../property';
import { AccessPolicy, Operation } from './accesss-policy';

type ResourceNames =
  | 'AccessToken'
  | 'Address'
  | 'Category'
  | 'Department'
  | 'Email'
  | 'Event'
  | 'Img'
  | 'Inbox'
  | 'Message'
  | 'Notification'
  | 'Phone'
  | 'Profile'
  | 'Session'
  | 'CustomerAddress'
  | 'CustomerEmail'
  | 'CustomerImg'
  | 'CustomerPhone'
  | 'CustomerProfile'
  | 'Customer'
  | 'Cart'
  | 'Discount'
  | 'Manufacturer'
  | 'Order'
  | 'PriceLevel'
  | 'Price'
  | 'ProductImg'
  | 'Product'
  | 'Purchase'
  | 'Quantity'
  | 'SerialNumber'
  | 'SkuDetail'
  | 'Sku'
  | 'Store'
  | 'Supplier'
  | 'Project'
  | 'Sprint'
  | 'Task'
  | 'ClockIn'
  | 'UserAddress'
  | 'UserEmail'
  | 'UserImg'
  | 'UserPhone'
  | 'UserProfile'
  | 'User';

@Exclude()
export class OperationDto implements Operation {
  @Property({ type: 'boolean' }) manage: boolean;
  @Property({ type: 'boolean' }) read: boolean;
  @Property({ type: 'boolean' }) write: boolean;
  @Property({ type: 'boolean' }) update: boolean;
  @Property({ type: 'boolean' }) delete: boolean;
}

@Exclude()
export class AccessPolicyDto implements Required<AccessPolicy<ResourceNames>> {
  @Property({ type: 'object', target: OperationDto })
  AccessToken: OperationDto;

  @Property({ type: 'object', target: OperationDto }) Address: OperationDto;

  @Property({ type: 'object', target: OperationDto })
  Category: OperationDto;

  @Property({ type: 'object', target: OperationDto })
  Department: OperationDto;

  @Property({ type: 'object', target: OperationDto }) Email: OperationDto;

  @Property({ type: 'object', target: OperationDto }) Event: OperationDto;

  @Property({ type: 'object', target: OperationDto }) Img: OperationDto;

  @Property({ type: 'object', target: OperationDto }) Inbox: OperationDto;

  @Property({ type: 'object', target: OperationDto }) Message: OperationDto;

  @Property({ type: 'object', target: OperationDto })
  Notification: OperationDto;

  @Property({ type: 'object', target: OperationDto }) Phone: OperationDto;

  @Property({ type: 'object', target: OperationDto }) Profile: OperationDto;

  @Property({ type: 'object', target: OperationDto }) Session: OperationDto;

  @Property({ type: 'object', target: OperationDto })
  CustomerAddress: OperationDto;

  @Property({ type: 'object', target: OperationDto })
  CustomerEmail: OperationDto;

  @Property({ type: 'object', target: OperationDto })
  CustomerImg: OperationDto;

  @Property({ type: 'object', target: OperationDto })
  CustomerPhone: OperationDto;

  @Property({ type: 'object', target: OperationDto })
  CustomerProfile: OperationDto;

  @Property({ type: 'object', target: OperationDto })
  Customer: OperationDto;

  @Property({ type: 'object', target: OperationDto }) Cart: OperationDto;

  @Property({ type: 'object', target: OperationDto })
  Discount: OperationDto;

  @Property({ type: 'object', target: OperationDto })
  Manufacturer: OperationDto;

  @Property({ type: 'object', target: OperationDto }) Order: OperationDto;

  @Property({ type: 'object', target: OperationDto })
  PriceLevel: OperationDto;

  @Property({ type: 'object', target: OperationDto }) Price: OperationDto;

  @Property({ type: 'object', target: OperationDto })
  ProductImg: OperationDto;

  @Property({ type: 'object', target: OperationDto }) Product: OperationDto;

  @Property({ type: 'object', target: OperationDto })
  Purchase: OperationDto;

  @Property({ type: 'object', target: OperationDto })
  Quantity: OperationDto;

  @Property({ type: 'object', target: OperationDto })
  SerialNumber: OperationDto;

  @Property({ type: 'object', target: OperationDto })
  SkuDetail: OperationDto;

  @Property({ type: 'object', target: OperationDto }) Sku: OperationDto;

  @Property({ type: 'object', target: OperationDto }) Store: OperationDto;

  @Property({ type: 'object', target: OperationDto })
  Supplier: OperationDto;

  @Property({ type: 'object', target: OperationDto }) Project: OperationDto;

  @Property({ type: 'object', target: OperationDto }) Sprint: OperationDto;

  @Property({ type: 'object', target: OperationDto }) Task: OperationDto;

  @Property({ type: 'object', target: OperationDto }) ClockIn: OperationDto;

  @Property({ type: 'object', target: OperationDto })
  UserAddress: OperationDto;

  @Property({ type: 'object', target: OperationDto })
  UserEmail: OperationDto;

  @Property({ type: 'object', target: OperationDto }) UserImg: OperationDto;

  @Property({ type: 'object', target: OperationDto })
  UserPhone: OperationDto;

  @Property({ type: 'object', target: OperationDto })
  UserProfile: OperationDto;

  @Property({ type: 'object', target: OperationDto }) User: OperationDto;

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
