import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  AccessToken: {},
  Address: {},
  AppEvent: {},
  Cart: {},
  Category: {},
  Clock: {},
  CustomerAccount: {},
  CustomerAddress: {},
  CustomerEmail: {},
  CustomerImg: {},
  CustomerPhone: {},
  CustomerProfile: {},
  Customer: {},
  Department: {},
  Discount: {},
  Email: {},
  Img: {},
  Inbox: {},
  Manufacturer: {},
  Message: {},
  Notification: {},
  Order: {},
  Organization: {},
  Phone: {},
  PriceLevel: {},
  Price: {},
  ProductAttribute: {},
  ProductImg: {},
  Product: {},
  Profile: {},
  Project: {},
  PurchaseOrder: {},
  Purchase: {},
  Quantity: {},
  Sale: {},
  SerialNumber: {},
  Session: {},
  SkuDetail: {},
  Sku: {},
  Sprint: {},
  Store: {},
  Supplier: {},
  Task: {},
  UserAddress: {},
  UserEmail: {},
  UserImg: {},
  UserPhone: {},
  UserProfile: {},
  User: {},
};

const pluralNames = {
  AccessToken: 'AccessTokens',
  Address: 'Addresss',
  AppEvent: 'AppEvents',
  Cart: 'Carts',
  Category: 'Categories',
  Clock: 'Clocks',
  CustomerAccount: 'CustomerAccounts',
  CustomerAddress: 'CustomerAddresss',
  CustomerEmail: 'CustomerEmails',
  CustomerImg: 'CustomerImgs',
  CustomerPhone: 'CustomerPhones',
  CustomerProfile: 'CustomerProfiles',
  Customer: 'Customers',
  Department: 'Departments',
  Discount: 'Discounts',
  Email: 'Emails',
  Img: 'Imgs',
  Inbox: 'Inboxs',
  Manufacturer: 'Manufacturers',
  Message: 'Messages',
  Notification: 'Notifications',
  Order: 'Orders',
  Organization: 'Organizations',
  Phone: 'Phones',
  PriceLevel: 'PriceLevels',
  Price: 'Prices',
  ProductAttribute: 'ProductAttributes',
  ProductImg: 'ProductImgs',
  Product: 'Products',
  Profile: 'Profiles',
  Project: 'Projects',
  PurchaseOrder: 'PurchaseOrders',
  Purchase: 'Purchases',
  Quantity: 'Quantities',
  Sale: 'Sales',
  SerialNumber: 'SerialNumbers',
  Session: 'Sessions',
  SkuDetail: 'SkuDetails',
  Sku: 'Skus',
  Sprint: 'Sprints',
  Store: 'Stores',
  Supplier: 'Suppliers',
  Task: 'Tasks',
  UserAddress: 'UserAddresss',
  UserEmail: 'UserEmails',
  UserImg: 'UserImgs',
  UserPhone: 'UserPhones',
  UserProfile: 'UserProfiles',
  User: 'Users',
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
