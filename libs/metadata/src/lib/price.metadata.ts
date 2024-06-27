import { Metadata } from '@webpackages/types';

export const PriceMetadata: Metadata = {
  groupName: 'inventory',
  properties: {
    price: {
      type: 'number',
      required: true,
      minimum: 0,
      moreThan: 'cost',
      example: 10.99,
      class: 'order-3 w-4/12 grow',
      tabIndex: 3,
      textPrefix: '$',
      tableColumnConditionalClass(value: any) {
        if (value.price != undefined && value.cost != undefined) {
          if (value.price < value.cost) {
            return 'bg-red-400 ';
          }
        }
        return '';
      },
    },
    cost: {
      type: 'number',
      required: true,
      minimum: 0,
      example: 4.99,
      class: 'order-4 w-4/12 grow',
      tabIndex: 4,
      textPrefix: '$',
      tableColumnConditionalClass(value: any) {
        if (value.price != undefined && value.cost != undefined) {
          if (value.price < value.cost) {
            return 'bg-red-400';
          }
        }
        return '';
      },
    },

    startDate: {
      type: 'date',
      required: true,
      example: new Date().toLocaleString(),
      class: 'order-5 w-4/12 grow',
      map(value: any) {
        return new Date(value.startDate).toLocaleString();
      },
      tableColumnConditionalClass(value: any) {
        if (value.startDate != undefined && value.endDate != undefined) {
          if (value.startDate > value.endDate) {
            return 'bg-red-400';
          }
        }
        return '';
      },
      tabIndex: 5,
    },
    endDate: {
      type: 'date',
      required: true,
      moreThan: 'startDate',
      example: new Date('10-20-2030').toLocaleString(),
      class: 'order-6 w-4/12 grow',
      map(value: any) {
        return new Date(value.endDate).toLocaleString();
      },

      tableColumnConditionalClass(value: any) {
        if (value.startDate != undefined && value.endDate != undefined) {
          if (value.startDate > value.endDate) {
            return 'bg-red-400';
          }
        }
        return '';
      },
      tabIndex: 6,
    },
  },
  relations: {
    sku: {
      relationType: 'owner',
      targetName: 'Sku',
      label: '',
      viewColumns: ['name', 'sku'],
      resourceLabelProperty: 'name',
      update: false,
      class: 'order-1 w-4/12 grow',
      tabIndex: 1,
    },
    priceLevel: {
      relationType: 'owner',
      targetName: 'PriceLevel',
      label: 'Price Level',
      viewColumns: ['name'],
      resourceLabelProperty: 'name',
      update: false,
      class: 'order-2 w-4/12 grow',
      tabIndex: 2,
    },
  },
};
