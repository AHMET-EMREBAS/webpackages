import { IProduct } from '@webpackages/models';

const upc = () => '5822' + Math.random() * 9999999 + '45';
export function getBuiltinProducts(): Partial<IProduct>[] {
  return [
    { id: 1, upc: upc(), name: 'iPhone 13 Pro' },
    { id: 2, upc: upc(), name: 'Samsung Galaxy S21 Ultra' },
    { id: 3, upc: upc(), name: 'Google Pixel 6 Pro' },
    { id: 4, upc: upc(), name: 'OnePlus 9 Pro' },
    { id: 5, upc: upc(), name: 'Xiaomi Mi 11 Ultra' },
    { id: 6, upc: upc(), name: 'Sony Xperia 1 III' },
    { id: 7, upc: upc(), name: 'Huawei P40 Pro' },
    { id: 8, upc: upc(), name: 'Oppo Find X3 Pro' },
    { id: 9, upc: upc(), name: 'Realme GT' },
    { id: 10, upc: upc(), name: 'Motorola Edge+' },
    { id: 11, upc: upc(), name: 'Asus ROG Phone 5' },
    { id: 12, upc: upc(), name: 'Lenovo Legion Phone Duel 2' },
    { id: 13, upc: upc(), name: 'Nokia 8.3 5G' },
    { id: 14, upc: upc(), name: 'LG Velvet' },
    { id: 15, upc: upc(), name: 'Vivo X60 Pro+' },
    { id: 16, upc: upc(), name: 'ZTE Axon 30 Ultra' },
    { id: 17, upc: upc(), name: 'BlackBerry KEY2' },
    { id: 18, upc: upc(), name: 'HTC U12+' },
    { id: 19, upc: upc(), name: 'Alcatel 3X' },
    { id: 20, upc: upc(), name: 'TCL 20 Pro 5G' },
    { id: 21, upc: upc(), name: 'Poco X3 NFC' },
    { id: 22, upc: upc(), name: 'Infinix Note 10 Pro' },
    { id: 23, upc: upc(), name: 'TECNO Camon 17 Pro' },
    { id: 24, upc: upc(), name: 'Ulefone Armor 11 5G' },
    { id: 25, upc: upc(), name: 'CAT S62 Pro' },
    { id: 26, upc: upc(), name: 'Fairphone 4' },
    { id: 27, upc: upc(), name: 'Essential Phone PH-1' },
    { id: 28, upc: upc(), name: 'Razer Phone 2' },
    { id: 29, upc: upc(), name: 'RED Hydrogen One' },
    { id: 30, upc: upc(), name: 'Meizu 18 Pro' },
    { id: 31, upc: upc(), name: 'LeEco Le Pro3' },
    { id: 32, upc: upc(), name: 'ZUK Z2 Pro' },
    { id: 33, upc: upc(), name: 'Xiaomi Black Shark 4 Pro' },
    { id: 34, upc: upc(), name: 'Google Pixel 5a' },
    { id: 35, upc: upc(), name: 'Samsung Galaxy Note 20 Ultra' },
    { id: 36, upc: upc(), name: 'iPhone 12 Mini' },
    { id: 37, upc: upc(), name: 'Sony Xperia 5 II' },
    { id: 38, upc: upc(), name: 'OnePlus 8T' },
    { id: 39, upc: upc(), name: 'Huawei Mate 40 Pro' },
    { id: 40, upc: upc(), name: 'Oppo Reno 5 Pro+' },
    { id: 41, upc: upc(), name: 'Realme X7 Pro' },
    { id: 42, upc: upc(), name: 'Motorola Moto G Power' },
    { id: 43, upc: upc(), name: 'Asus Zenfone 8' },
    { id: 44, upc: upc(), name: 'Nokia 5.4' },
    { id: 45, upc: upc(), name: 'LG Wing' },
    { id: 46, upc: upc(), name: 'Vivo V21' },
    { id: 47, upc: upc(), name: 'ZTE Blade 20 Pro 5G' },
    { id: 48, upc: upc(), name: 'BlackBerry KEYone' },
    { id: 49, upc: upc(), name: 'HTC Desire 21 Pro 5G' },
    { id: 50, upc: upc(), name: 'Alcatel 1B' },
  ];
}