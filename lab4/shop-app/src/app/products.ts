export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Книга Достоевский Ф. М.: Преступление и наказание',
    price: 1292,
    description: '    -ISBN: 9785170906307' +
        '-Язык издания: русский\n' +
        '    -Переплет: мягкий переплет\n' +
        '    -Жанр: русская классика',
    rating: 9.9,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h38/h4b/64342519021598.jpg?format=gallery-large',
    link: 'https://kaspi.kz/shop/p/dostoevskii-f-m-prestuplenie-i-nakazanie-101475338/?c=750000000'
  },
  {
    id: 2,
    name: 'Книга Достоевский Ф. М.: Белые ночи',
    price: 1050,
    description: '    ISBN: 9785171065751\n' +
        '    Язык издания: русский\n' +
        '    Переплет: мягкий переплет\n' +
        '    Жанр: русская классика',
    rating: 8.9,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/ha0/hf1/64342382641182.jpg?format=gallery-large',
    link: 'https://kaspi.kz/shop/p/dostoevskii-f-m-belye-nochi-101542854/?c=750000000'
  },
  {
    id: 3,
    name: 'Книга Достоевский Ф.М.: Идиот',
    price: 1080,
    description: '    ISBN: 9785171464844\n' +
        '    Возраст: 12+\n' +
        '    Язык издания: русский\n' +
        '    Переплет: мягкий переплет\n' +
        '    Жанр: русская классика',
    rating: 8.9,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hba/hf2/64366163820574.jpg?format=gallery-large',
    link: 'https://kaspi.kz/shop/p/dostoevskii-f-m-idiot-103455708/?c=750000000'
  },
  {
    id: 4,
    name: 'Книга Достоевский Ф. М.: Братья Карамазовы',
    price: 1120,
    description: '    ISBN: 9785389066571\n' +
        '    Язык издания: русский\n' +
        '    Переплет: твердый переплет\n' +
        '    Жанр: русская классика',
    rating: 8.9,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h38/hfb/63895561797662.jpg?format=gallery-large',
    link: 'https://kaspi.kz/shop/p/dostoevskii-f-m-brat-ja-karamazovy-100299037/?c=750000000'
  },
  {
    id: 5,
    name: 'Книга Достоевский Ф. М.: Бесы',
    price: 1124,
    description: '    ISBN: 9785171384777\n' +
        '    Возраст: 12+\n' +
        '    Язык издания: русский\n' +
        '    Переплет: мягкий переплет\n' +
        '    Жанр: русская классика',
    rating: 8.9,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/hec/63914644439070.jpg?format=gallery-large',
    link: 'https://kaspi.kz/shop/p/dostoevskii-f-m-besy-102161288/?c=750000000'
  },
  {
    id: 6,
    name: 'Книга Достоевский Ф. М.: Униженные и оскорбленные',
    price: 1050,
    description: '    ISBN: 9785170937257\n' +
        '    Язык издания: русский\n' +
        '    Переплет: мягкий переплет\n' +
        '    Жанр: русская классика',
    rating: 8.9,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h45/he3/64076432506910.jpg?format=gallery-large',
    link: 'https://kaspi.kz/shop/p/dostoevskii-f-m-unizhennye-i-oskorblennye-101475245/?c=750000000'
  },
  {
    id: 7,
    name: 'Книга Достоевский Ф.М.: Идиот',
    price: 1750,
    description: '    ISBN: 9785041166779\n' +
        '    Язык издания: русский\n' +
        '    Переплет: твердый переплет\n' +
        '    Жанр: русская классика',
    rating: 8.9,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h6d/64328533409822.jpg?format=gallery-large',
    link: 'https://kaspi.kz/shop/p/dostoevskii-f-m-idiot-101756378/?c=750000000'
  },
  {
    id: 8,
    name: 'Смартфон Apple iPhone 13 128Gb белый',
    price: 288874,
    description: '    Технология NFC: Да\n' +
        '    Цвет: белый\n' +
        '    Тип экрана: OLED, Super Retina XDR\n' +
        '    Диагональ: 6.1 дюйм\n' +
        '    Размер оперативной памяти: 4 ГБ\n' +
        '    Процессор: 6-ядерный Apple A15 Bionic\n' +
        '    Объем встроенной памяти: 128.0 ГБ\n' +
        '    Емкость аккумулятора: 3095.0 мАч',
    rating: 8.9,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-large',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000'
  },
  {
    id: 9,
    name: 'Wi-Fi роутер Xiaomi Mi Wi-Fi Router 4A Gigabit Edition',
    price: 24990,
    description: '    Тип: Wi-Fi роутер\n' +
        '    Максимальная скорость беспроводного соединения: 1167.0 Мбит/с\n' +
        '    Стандарты Wi-Fi: Wi-Fi 4 (802.11n), ,Wi-Fi 5 (802.11ac)\n' +
        '    Количество LAN портов: 2\n' +
        '    Диапазоны частот: 2.4 ГГц, ,5 ГГц',
    rating: 8.9,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h9e/ha1/63832974196766.jpg?format=gallery-large',
    link: 'https://kaspi.kz/shop/p/wi-fi-router-xiaomi-mi-wi-fi-router-4a-gigabit-edition-100044713/?c=750000000'
  },
  {
    id: 10,
    name: 'МФУ Epson EcoTank L3250',
    price: 113031,
    description: '    Устройство: МФУ\n' +
        '    Тип печати: цветная\n' +
        '    Технология печати: пьезоэлектрическая струйная\n' +
        '    Максимальный формат: A4\n' +
        '    Максимальное разрешение для ч/б печати: 5760x1440 dpi\n' +
        '    Максимальное разрешение для цветной печати: 5760x1440 dpi',
    rating: 8.9,
    img: 'https://resources.cdn-kaspi.kz/img/m/p/ha6/hf3/66594300821534.jpg?format=gallery-large',
    link: 'https://kaspi.kz/shop/p/mfu-epson-ecotank-l3250-107929066/?c=750000000'
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/