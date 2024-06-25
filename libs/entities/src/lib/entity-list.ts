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
  Sku,
  SkuView,
  AccessToken,
  AccessTokenView,
  Address,
  AddressView,
  AppEvent,
  AppEventView,
  Cart,
  CartView,
  Category,
  CategoryView,
  Clock,
  ClockView,
  CustomerAccount,
  CustomerAccountView,
  CustomerAddress,
  CustomerAddressView,
  CustomerEmail,
  CustomerEmailView,
  CustomerImg,
  CustomerImgView,
  CustomerPhone,
  CustomerPhoneView,
  CustomerProfile,
  CustomerProfileView,
  Customer,
  CustomerView,
  Department,
  DepartmentView,
  Discount,
  DiscountView,
  Email,
  EmailView,
  Img,
  ImgView,
  Inbox,
  InboxView,
  Manufacturer,
  ManufacturerView,
  Message,
  MessageView,
  Notification,
  NotificationView,
  Order,
  OrderView,
  Organization,
  OrganizationView,
  Phone,
  PhoneView,
  PriceLevel,
  PriceLevelView,
  Price,
  PriceView,
  ProductImg,
  ProductImgView,
  Product,
  ProductView,
  Profile,
  ProfileView,
  Project,
  ProjectView,
  PurchaseOrder,
  PurchaseOrderView,
  Purchase,
  PurchaseView,
  Quantity,
  QuantityView,
  Sale,
  SaleView,
  SerialNumber,
  SerialNumberView,
  Session,
  SessionView,
  SkuDetail,
  SkuDetailView,
  Sprint,
  SprintView,
  Store,
  StoreView,
  Supplier,
  SupplierView,
  Task,
  TaskView,
  UserAddress,
  UserAddressView,
  UserEmail,
  UserEmailView,
  UserImg,
  UserImgView,
  UserPhone,
  UserPhoneView,
  UserProfile,
  UserProfileView,
  User,
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
