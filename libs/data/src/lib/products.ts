import { IProduct } from '@webpackages/models';

function catId() {
  return Math.floor(Math.random() * 50) + 1;
}

function supId() {
  return Math.floor(Math.random() * 10) + 1;
}

function rnd() {
  return Math.floor(Math.random() * 999999) + 6000000;
}
const upc = () => '582245' + rnd();

let startId = 0;
function id() {
  return startId++;
}
export function getBuiltinProducts(): Partial<any>[] {
  return [
    {
      id: id(),
      upc: upc(),
      name: 'iPhone 13 Pro',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'Samsung Galaxy S21 Ultra',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'Google Pixel 6 Pro',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'OnePlus 9 Pro',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'Xiaomi Mi 11 Ultra',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'Sony Xperia 1 III',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'Huawei P40 Pro',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'Oppo Find X3 Pro',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    { upc: upc(), name: 'Realme GT', category: { id: 1 }, supplier: { id: 1 } },
    {
      id: id(),
      upc: upc(),
      name: 'Motorola Edge+',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'Asus ROG Phone 5',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'Lenovo Legion Phone Duel 2',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'Nokia 8.3 5G',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    { upc: upc(), name: 'LG Velvet', category: { id: 1 }, supplier: { id: 1 } },
    {
      id: id(),
      upc: upc(),
      name: 'Vivo X60 Pro+',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'ZTE Axon 30 Ultra',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'BlackBerry KEY2',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    { upc: upc(), name: 'HTC U12+', category: { id: 1 }, supplier: { id: 1 } },
    {
      id: id(),
      upc: upc(),
      name: 'Alcatel 3X',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'TCL 20 Pro 5G',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'Poco X3 NFC',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'Infinix Note 10 Pro',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'TECNO Camon 17 Pro',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'Ulefone Armor 11 5G',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'CAT S62 Pro',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'Fairphone 4',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'Essential Phone PH-1',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'Razer Phone 2',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'RED Hydrogen One',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'Meizu 18 Pro',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'LeEco Le Pro3',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'ZUK Z2 Pro',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'Xiaomi Black Shark 4 Pro',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'Google Pixel 5a',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'Samsung Galaxy Note 20 Ultra',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'iPhone 12 Mini',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'Sony Xperia 5 II',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'OnePlus 8T',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'Huawei Mate 40 Pro',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'Oppo Reno 5 Pro+',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'Realme X7 Pro',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'Motorola Moto G Power',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'Asus Zenfone 8',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    { upc: upc(), name: 'Nokia 5.4', category: { id: 1 }, supplier: { id: 1 } },
    { upc: upc(), name: 'LG Wing' },
    { upc: upc(), name: 'Vivo V21', category: { id: 1 }, supplier: { id: 1 } },
    {
      id: id(),
      upc: upc(),
      name: 'ZTE Blade 20 Pro 5G',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'BlackBerry KEYone',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'HTC Desire 21 Pro 5G',
      category: { id: catId() },
      supplier: { id: supId() },
    },
    {
      id: id(),
      upc: upc(),
      name: 'Alcatel 1B',
      category: { id: catId() },
      supplier: { id: supId() },
    },
  ];
}
