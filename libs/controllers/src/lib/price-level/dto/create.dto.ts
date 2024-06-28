import { IDDto } from '@webpackages/database';
import { Property } from '@webpackages/property';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreatePriceLevelDto {
  @Property({
    type: 'string',
    label: 'Price Level Name',
    minLength: 3,
    maxLength: 100,
    required: true,
    unique: true,
    example: 'Chicago Retail',
    tabIndex: 1,
  })
  name: string;
  @Property({
    type: 'string',
    label: 'Currency',
    enum: [
      'United States Dollar (USD)',
      'Euro (EUR)',
      'British Pound Sterling (GBP)',
      'Japanese Yen (JPY)',
      'Canadian Dollar (CAD)',
      'Australian Dollar (AUD)',
      'Swiss Franc (CHF)',
      'Chinese Yuan Renminbi (CNY)',
      'Indian Rupee (INR)',
      'Brazilian Real (BRL)',
      'Russian Ruble (RUB)',
      'South African Rand (ZAR)',
      'Mexican Peso (MXN)',
      'Singapore Dollar (SGD)',
      'New Zealand Dollar (NZD)',
      'Hong Kong Dollar (HKD)',
      'Norwegian Krone (NOK)',
      'South Korean Won (KRW)',
      'Swedish Krona (SEK)',
      'Turkish Lira (TRY)',
    ],
    inputType: 'select',
    required: true,
    minLength: 1,
    example: 'Turkish Lira (TRY)',
    tabIndex: 2,
  })
  currency: string;
  @Property({
    type: 'number',
    label: 'Location Taxrate',
    textPrefix: '%',
    required: true,
    minimum: 0,
    example: 10.25,
    tabIndex: 3,
  })
  taxrate: number;
}
