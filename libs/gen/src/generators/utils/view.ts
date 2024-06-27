// @ViewEntity({
//     expression(ds) {
//       return ds
//         .createQueryBuilder()

import { Metadata } from '@webpackages/types';
import { names } from '@webpackages/utils';

//         .select('ROW_NUMBER() OVER ()', 'id')
//         .addSelect('main.id', 'eid')
//         .addSelect('main.createdAt', 'createdAt')
//         .addSelect('main.updatedAt', 'updatedAt')
//         .addSelect('main.deletedAt', 'deletedAt')
//         .addSelect('main.active', 'active')

//         // <%- selectedProperties %>
//         .addSelect('main.price', 'price')
//         .addSelect('main.cost', 'cost')
//         .addSelect('main.startDate', 'startDate')
//         .addSelect('main.endDate', 'endDate')

//         // <%- selectedRelationProperties %>
//         .addSelect('sku.name', 'skuName')
//         .addSelect('sku.sku', 'skuSku')
//         .addSelect('sku.id', 'skuId')
//         .addSelect('sku.active', 'skuActive')

//         .addSelect('priceLevel.name', 'priceLevelName')
//         .addSelect('priceLevel.id', 'priceLevelId')
//         .addSelect('priceLevel.active', 'priceLevelActive')

//         .from(Price, 'main')

//         // <%- relationJoins %>
//         .leftJoin(SkuView, 'sku', 'main.skuId = sku.id')
//         .leftJoin(
//           PriceLevelView,
//           'priceLevel',
//           'priceLevel.eid = main.priceLevelId'
//         );
//     },
//   })

export function printRelationJoins(metadata: Metadata) {
  const relations = metadata.relations;

  if (relations) {
    const relationsList = Object.entries(relations);

    const printable = relationsList
      .map(([key, value]) => {
        return `.leftJoin(${value.targetName}View, '${
          value.targetName
        }', 'main.${names(value.targetName).propertyName + 'Id'} = ${
          value.targetName
        }.eid' )`;
      })
      .join('\n');

    return printable;
  }

  return '';
}

export function printSelectedProperties(metadata: Metadata): string {
  const properties = metadata.properties;
  if (properties) {
    const properties = Object.entries(metadata.properties);

    const printable = properties
      .map(([key, value]) => {
        return `.addSelect('main.${key}', '${key}')`;
      })
      .join('\n');

    return printable;
  }

  return '';
}

export function printSelectedRelationProperties(metadata: Metadata): string {
  const relations = metadata.relations;

  if (relations) {
    const relations = Object.entries(metadata.relations);

    const printable = relations.map(([key, value]) => {
      return `.addSelect('${value.targetName}.${key}')`;
    });
  }

  return '';
}
