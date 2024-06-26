import {
  AccessToken,
  AccessTokenSubscriber,
  AccessTokenView,
} from './access-token';
import { Address, AddressSubscriber, AddressView } from './address';
import { AppEvent, AppEventSubscriber, AppEventView } from './app-event';
import { Cart, CartSubscriber, CartView } from './cart';
import { Category, CategorySubscriber, CategoryView } from './category';
import { Clock, ClockSubscriber, ClockView } from './clock';
import {
  CustomerAccount,
  CustomerAccountSubscriber,
  CustomerAccountView,
} from './customer-account';
import {
  CustomerAddress,
  CustomerAddressSubscriber,
  CustomerAddressView,
} from './customer-address';
import {
  CustomerEmail,
  CustomerEmailSubscriber,
  CustomerEmailView,
} from './customer-email';
import {
  CustomerImg,
  CustomerImgSubscriber,
  CustomerImgView,
} from './customer-img';
import {
  CustomerPhone,
  CustomerPhoneSubscriber,
  CustomerPhoneView,
} from './customer-phone';
import {
  CustomerProfile,
  CustomerProfileSubscriber,
  CustomerProfileView,
} from './customer-profile';
import { Customer, CustomerSubscriber, CustomerView } from './customer';
import { Department, DepartmentSubscriber, DepartmentView } from './department';
import { Discount, DiscountSubscriber, DiscountView } from './discount';
import { Email, EmailSubscriber, EmailView } from './email';
import { Img, ImgSubscriber, ImgView } from './img';
import { Inbox, InboxSubscriber, InboxView } from './inbox';
import {
  Manufacturer,
  ManufacturerSubscriber,
  ManufacturerView,
} from './manufacturer';
import { Message, MessageSubscriber, MessageView } from './message';
import {
  Notification,
  NotificationSubscriber,
  NotificationView,
} from './notification';
import { Order, OrderSubscriber, OrderView } from './order';
import {
  Organization,
  OrganizationSubscriber,
  OrganizationView,
} from './organization';
import { Phone, PhoneSubscriber, PhoneView } from './phone';
import {
  PriceLevel,
  PriceLevelSubscriber,
  PriceLevelView,
} from './price-level';
import { Price, PriceSubscriber, PriceView } from './price';
import {
  ProductImg,
  ProductImgSubscriber,
  ProductImgView,
} from './product-img';
import { Product, ProductSubscriber, ProductView } from './product';
import { Profile, ProfileSubscriber, ProfileView } from './profile';
import { Project, ProjectSubscriber, ProjectView } from './project';
import {
  PurchaseOrder,
  PurchaseOrderSubscriber,
  PurchaseOrderView,
} from './purchase-order';
import { Purchase, PurchaseSubscriber, PurchaseView } from './purchase';
import { Quantity, QuantitySubscriber, QuantityView } from './quantity';
import { Sale, SaleSubscriber, SaleView } from './sale';
import {
  SerialNumber,
  SerialNumberSubscriber,
  SerialNumberView,
} from './serial-number';
import { Session, SessionSubscriber, SessionView } from './session';
import { SkuDetail, SkuDetailSubscriber, SkuDetailView } from './sku-detail';
import { Sku, SkuSubscriber, SkuView } from './sku';
import { Sprint, SprintSubscriber, SprintView } from './sprint';
import { Store, StoreSubscriber, StoreView } from './store';
import { Supplier, SupplierSubscriber, SupplierView } from './supplier';
import { Task, TaskSubscriber, TaskView } from './task';
import {
  UserAddress,
  UserAddressSubscriber,
  UserAddressView,
} from './user-address';
import { UserEmail, UserEmailSubscriber, UserEmailView } from './user-email';
import { UserImg, UserImgSubscriber, UserImgView } from './user-img';
import { UserPhone, UserPhoneSubscriber, UserPhoneView } from './user-phone';
import {
  UserProfile,
  UserProfileSubscriber,
  UserProfileView,
} from './user-profile';
import { User, UserSubscriber, UserView } from './user';

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

export const viewList = [
  AccessTokenView,
  AddressView,
  AppEventView,
  CartView,
  CategoryView,
  ClockView,
  CustomerAccountView,
  CustomerAddressView,
  CustomerEmailView,
  CustomerImgView,
  CustomerPhoneView,
  CustomerProfileView,
  CustomerView,
  DepartmentView,
  DiscountView,
  EmailView,
  ImgView,
  InboxView,
  ManufacturerView,
  MessageView,
  NotificationView,
  OrderView,
  OrganizationView,
  PhoneView,
  PriceLevelView,
  PriceView,
  ProductImgView,
  ProductView,
  ProfileView,
  ProjectView,
  PurchaseOrderView,
  PurchaseView,
  QuantityView,
  SaleView,
  SerialNumberView,
  SessionView,
  SkuDetailView,
  SkuView,
  SprintView,
  StoreView,
  SupplierView,
  TaskView,
  UserAddressView,
  UserEmailView,
  UserImgView,
  UserPhoneView,
  UserProfileView,
  UserView,
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
