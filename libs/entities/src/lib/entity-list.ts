import { AccessToken, AccessTokenSubscriber } from './access-token';
import { Address, AddressSubscriber } from './address';
import { AppEvent, AppEventSubscriber } from './app-event';
import { Cart, CartSubscriber } from './cart';
import { Category, CategorySubscriber } from './category';
import { Clock, ClockSubscriber } from './clock';
import { CustomerAccount, CustomerAccountSubscriber } from './customer-account';
import { CustomerAddress, CustomerAddressSubscriber } from './customer-address';
import { CustomerEmail, CustomerEmailSubscriber } from './customer-email';
import { CustomerImg, CustomerImgSubscriber } from './customer-img';
import { CustomerPhone, CustomerPhoneSubscriber } from './customer-phone';
import { CustomerProfile, CustomerProfileSubscriber } from './customer-profile';
import { Customer, CustomerSubscriber } from './customer';
import { Department, DepartmentSubscriber } from './department';
import { Discount, DiscountSubscriber } from './discount';
import { Email, EmailSubscriber } from './email';
import { Img, ImgSubscriber } from './img';
import { Inbox, InboxSubscriber } from './inbox';
import { Manufacturer, ManufacturerSubscriber } from './manufacturer';
import { Message, MessageSubscriber } from './message';
import { Notification, NotificationSubscriber } from './notification';
import { Order, OrderSubscriber } from './order';
import { Organization, OrganizationSubscriber } from './organization';
import { Phone, PhoneSubscriber } from './phone';
import { PriceLevel, PriceLevelSubscriber } from './price-level';
import { Price, PriceSubscriber } from './price';
import { ProductImg, ProductImgSubscriber } from './product-img';
import { Product, ProductSubscriber } from './product';
import { Profile, ProfileSubscriber } from './profile';
import { Project, ProjectSubscriber } from './project';
import { PurchaseOrder, PurchaseOrderSubscriber } from './purchase-order';
import { Purchase, PurchaseSubscriber } from './purchase';
import { Quantity, QuantitySubscriber } from './quantity';
import { Sale, SaleSubscriber } from './sale';
import { SerialNumber, SerialNumberSubscriber } from './serial-number';
import { Session, SessionSubscriber } from './session';
import { SkuDetail, SkuDetailSubscriber } from './sku-detail';
import { Sku, SkuSubscriber } from './sku';
import { Sprint, SprintSubscriber } from './sprint';
import { Store, StoreSubscriber } from './store';
import { Supplier, SupplierSubscriber } from './supplier';
import { Task, TaskSubscriber } from './task';
import { UserAddress, UserAddressSubscriber } from './user-address';
import { UserEmail, UserEmailSubscriber } from './user-email';
import { UserImg, UserImgSubscriber } from './user-img';
import { UserPhone, UserPhoneSubscriber } from './user-phone';
import { UserProfile, UserProfileSubscriber } from './user-profile';
import { User, UserSubscriber } from './user';

export const entityList = [
  AccessToken,
  Address,
  AppEvent,
  Cart,
  Category,
  Clock,
  CustomerAccount,
  CustomerAddress,
  CustomerEmail,
  CustomerImg,
  CustomerPhone,
  CustomerProfile,
  Customer,
  Department,
  Discount,
  Email,
  Img,
  Inbox,
  Manufacturer,
  Message,
  Notification,
  Order,
  Organization,
  Phone,
  PriceLevel,
  Price,
  ProductImg,
  Product,
  Profile,
  Project,
  PurchaseOrder,
  Purchase,
  Quantity,
  Sale,
  SerialNumber,
  Session,
  SkuDetail,
  Sku,
  Sprint,
  Store,
  Supplier,
  Task,
  UserAddress,
  UserEmail,
  UserImg,
  UserPhone,
  UserProfile,
  User,
];

export const subscriberList = [
  AccessTokenSubscriber,
  AddressSubscriber,
  AppEventSubscriber,
  CartSubscriber,
  CategorySubscriber,
  ClockSubscriber,
  CustomerAccountSubscriber,
  CustomerAddressSubscriber,
  CustomerEmailSubscriber,
  CustomerImgSubscriber,
  CustomerPhoneSubscriber,
  CustomerProfileSubscriber,
  CustomerSubscriber,
  DepartmentSubscriber,
  DiscountSubscriber,
  EmailSubscriber,
  ImgSubscriber,
  InboxSubscriber,
  ManufacturerSubscriber,
  MessageSubscriber,
  NotificationSubscriber,
  OrderSubscriber,
  OrganizationSubscriber,
  PhoneSubscriber,
  PriceLevelSubscriber,
  PriceSubscriber,
  ProductImgSubscriber,
  ProductSubscriber,
  ProfileSubscriber,
  ProjectSubscriber,
  PurchaseOrderSubscriber,
  PurchaseSubscriber,
  QuantitySubscriber,
  SaleSubscriber,
  SerialNumberSubscriber,
  SessionSubscriber,
  SkuDetailSubscriber,
  SkuSubscriber,
  SprintSubscriber,
  StoreSubscriber,
  SupplierSubscriber,
  TaskSubscriber,
  UserAddressSubscriber,
  UserEmailSubscriber,
  UserImgSubscriber,
  UserPhoneSubscriber,
  UserProfileSubscriber,
  UserSubscriber,
];
