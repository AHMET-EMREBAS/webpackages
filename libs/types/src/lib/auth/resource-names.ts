import { Arr } from '../common/arr';

export type ResourceName =
  | 'AccessToken'
  | 'Address'
  | 'Cart'
  | 'Category'
  | 'Clock'
  | 'Customer'
  | 'CustomerAddress'
  | 'CustomerEmail'
  | 'CustomerImg'
  | 'CustomerPhone'
  | 'CustomerProfile'
  | 'Department'
  | 'Discount'
  | 'Email'
  | 'AppEvent'
  | 'Img'
  | 'Inbox'
  | 'Manufacturer'
  | 'Message'
  | 'Notification'
  | 'Order'
  | 'Phone'
  | 'Price'
  | 'PriceLevel'
  | 'Product'
  | 'ProductImg'
  | 'Profile'
  | 'Project'
  | 'Purchase'
  | 'Quantity'
  | 'SerialNumber'
  | 'Session'
  | 'Sku'
  | 'SkuDetail'
  | 'Sprint'
  | 'Store'
  | 'Supplier'
  | 'Task'
  | 'User'
  | 'UserAddress'
  | 'UserEmail'
  | 'UserImg'
  | 'UserPhone'
  | 'UserProfile';

export const ResourceNames: Arr<ResourceName> = [
  'AccessToken',
  'Address',
  'Category',
  'Department',
  'Email',
  'AppEvent',
  'Img',
  'Inbox',
  'Message',
  'Notification',
  'Phone',
  'Profile',
  'Session',
  'CustomerAddress',
  'CustomerEmail',
  'CustomerImg',
  'CustomerPhone',
  'CustomerProfile',
  'Customer',
  'Cart',
  'Discount',
  'Manufacturer',
  'Order',
  'PriceLevel',
  'Price',
  'ProductImg',
  'Product',
  'Purchase',
  'Quantity',
  'SerialNumber',
  'SkuDetail',
  'Sku',
  'Store',
  'Supplier',
  'Project',
  'Sprint',
  'Task',
  'Clock',
  'UserAddress',
  'UserEmail',
  'UserImg',
  'UserPhone',
  'UserProfile',
  'User',
];
