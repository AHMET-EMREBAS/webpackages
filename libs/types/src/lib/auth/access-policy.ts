import { Operation } from './operation';
import { ResourceName } from './resource-names';

export class AccessPolicy implements Record<ResourceName, Partial<Operation>> {
  Organization: Partial<Operation>;
  Sale: Partial<Operation>;
  AppEvent: Partial<Operation>;
  AccessToken: Partial<Operation>;
  Address: Partial<Operation>;
  Cart: Partial<Operation>;
  Category: Partial<Operation>;
  Clock: Partial<Operation>;
  Customer: Partial<Operation>;
  CustomerAddress: Partial<Operation>;
  CustomerEmail: Partial<Operation>;
  CustomerImg: Partial<Operation>;
  CustomerPhone: Partial<Operation>;
  CustomerProfile: Partial<Operation>;
  Department: Partial<Operation>;
  Discount: Partial<Operation>;
  Email: Partial<Operation>;
  Img: Partial<Operation>;
  Inbox: Partial<Operation>;
  Manufacturer: Partial<Operation>;
  Message: Partial<Operation>;
  Notification: Partial<Operation>;
  Order: Partial<Operation>;
  Phone: Partial<Operation>;
  Price: Partial<Operation>;
  PriceLevel: Partial<Operation>;
  Product: Partial<Operation>;
  ProductImg: Partial<Operation>;
  Profile: Partial<Operation>;
  Project: Partial<Operation>;
  Purchase: Partial<Operation>;
  Quantity: Partial<Operation>;
  SerialNumber: Partial<Operation>;
  Session: Partial<Operation>;
  Sku: Partial<Operation>;
  SkuDetail: Partial<Operation>;
  Sprint: Partial<Operation>;
  Store: Partial<Operation>;
  Supplier: Partial<Operation>;
  Task: Partial<Operation>;
  User: Partial<Operation>;
  UserAddress: Partial<Operation>;
  UserEmail: Partial<Operation>;
  UserImg: Partial<Operation>;
  UserPhone: Partial<Operation>;
  UserProfile: Partial<Operation>;

  // 
  Admin?: true;
  Root?: true;
  Reader?: true;
}
