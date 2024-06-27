import { IProduct } from '@webpackages/models';

function rnd() {
  return Math.floor(Math.random() * 999999) + 6000000;
}
const upc = () => '582245' + rnd();

export function getBuiltinProducts(): Partial<IProduct>[] {
  return [
    {
      upc: upc(),
      name: 'iPhone 13 Pro',
    },
    {
      upc: upc(),
      name: 'Samsung Galaxy S21 Ultra',
    },
    {
      upc: upc(),
      name: 'Google Pixel 6 Pro',
    },
    {
      upc: upc(),
      name: 'OnePlus 9 Pro',
    },
    {
      upc: upc(),
      name: 'Xiaomi Mi 11 Ultra',
    },
    {
      upc: upc(),
      name: 'Sony Xperia 1 III',
    },
    {
      upc: upc(),
      name: 'Huawei P40 Pro',
    },
    {
      upc: upc(),
      name: 'Oppo Find X3 Pro',
    },
    {
      upc: upc(),
      name: 'Realme GT',
    },
    {
      upc: upc(),
      name: 'Motorola Edge+',
    },
    {
      upc: upc(),
      name: 'Asus ROG Phone 5',
    },
    {
      upc: upc(),
      name: 'Lenovo Legion Phone Duel 2',
    },
    {
      upc: upc(),
      name: 'Nokia 8.3 5G',
    },
    {
      upc: upc(),
      name: 'LG Velvet',
    },
    {
      upc: upc(),
      name: 'Vivo X60 Pro+',
    },
    {
      upc: upc(),
      name: 'ZTE Axon 30 Ultra',
    },
    {
      upc: upc(),
      name: 'BlackBerry KEY2',
    },
    {
      upc: upc(),
      name: 'HTC U12+',
    },
    {
      upc: upc(),
      name: 'Alcatel 3X',
    },
    {
      upc: upc(),
      name: 'TCL 20 Pro 5G',
    },
    {
      upc: upc(),
      name: 'Poco X3 NFC',
    },
    {
      upc: upc(),
      name: 'Infinix Note 10 Pro',
    },
    {
      upc: upc(),
      name: 'TECNO Camon 17 Pro',
    },
    {
      upc: upc(),
      name: 'Ulefone Armor 11 5G',
    },
    {
      upc: upc(),
      name: 'CAT S62 Pro',
    },
    {
      upc: upc(),
      name: 'Fairphone 4',
    },
    {
      upc: upc(),
      name: 'Essential Phone PH-1',
    },
    {
      upc: upc(),
      name: 'Razer Phone 2',
    },
    {
      upc: upc(),
      name: 'RED Hydrogen One',
    },
    {
      upc: upc(),
      name: 'Meizu 18 Pro',
    },
    {
      upc: upc(),
      name: 'LeEco Le Pro3',
    },
    {
      upc: upc(),
      name: 'ZUK Z2 Pro',
    },
    {
      upc: upc(),
      name: 'Xiaomi Black Shark 4 Pro',
    },
    {
      upc: upc(),
      name: 'Google Pixel 5a',
    },
    {
      upc: upc(),
      name: 'Samsung Galaxy Note 20 Ultra',
    },
    {
      upc: upc(),
      name: 'iPhone 12 Mini',
    },
    {
      upc: upc(),
      name: 'Sony Xperia 5 II',
    },
    {
      upc: upc(),
      name: 'OnePlus 8T',
    },
    {
      upc: upc(),
      name: 'Huawei Mate 40 Pro',
    },
    {
      upc: upc(),
      name: 'Oppo Reno 5 Pro+',
    },
    {
      upc: upc(),
      name: 'Realme X7 Pro',
    },
    {
      upc: upc(),
      name: 'Motorola Moto G Power',
    },
    {
      upc: upc(),
      name: 'Asus Zenfone 8',
    },
    {
      upc: upc(),
      name: 'Nokia 5.4',
    },
    { upc: upc(), name: 'LG Wing' },
    {
      upc: upc(),
      name: 'Vivo V21',
    },
    {
      upc: upc(),
      name: 'ZTE Blade 20 Pro 5G',
    },
    {
      upc: upc(),
      name: 'BlackBerry KEYone',
    },
    {
      upc: upc(),
      name: 'HTC Desire 21 Pro 5G',
    },
    {
      upc: upc(),
      name: 'Alcatel 1B',
    },
  ];
}
