import { ISupplier } from '@webpackages/models';


export function getBuiltinSuppliers(): Partial<ISupplier>[] {
  return [
    { id: 1, name: 'Amazon' },
    { id: 2, name: 'Ebay' },
    { id: 3, name: 'Etcy' },
    { id: 3, name: 'BestBuy' },
    { id: 4, name: 'Alibaba' },
    { id: 5, name: 'Office Depot' },
    { id: 6, name: 'Home Depot' },
    { id: 7, name: 'Wallmart' },
    { id: 1, name: 'Hikvision' },
    { id: 2, name: 'Dahua Technology' },
    { id: 3, name: 'Axis Communications' },
    { id: 4, name: 'Hanwha Techwin' },
    { id: 5, name: 'Lorex Technology' },
    { id: 6, name: 'Vivotek' },
    { id: 7, name: 'Uniview (UNV)' },
    { id: 8, name: 'Pelco by Schneider Electric' },
    { id: 9, name: 'Bosch Security Systems' },
    { id: 10, name: 'FLIR Systems' },
    { id: 11, name: 'Micro Center' },
  ];
}
