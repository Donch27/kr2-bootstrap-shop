# Hockey Shop — Контрольная работа №2

Тема: «CSS-фреймворки: разработка интерфейса на Bootstrap или альтернативном CSS-фреймворке».

**Студент:** ФИО_СТУДЕНТА
**Группа:** НОМЕР_ГРУППЫ

**Опубликованная версия (GitHub Pages):** ССЫЛКА_НА_GITHUB_PAGES

## Описание

Учебный интернет-магазин хоккейной экипировки (клюшки, коньки, защита, аксессуары), сделанный на Bootstrap 5. Отдельная реализация предметной области КР №1 через CSS-фреймворк.

## Используемый фреймворк

Bootstrap 5.3.8.

## Способ подключения

Bootstrap подключён **локально, без CDN**. Файлы фреймворка (compiled-версия с getbootstrap.com) размещены в папке `vendor/bootstrap/`.

Используются:

- `vendor/bootstrap/css/bootstrap.min.css` — в `<head>`, до `css/custom.css`;
- `vendor/bootstrap/js/bootstrap.bundle.min.js` — перед `</body>` (нужен для navbar, dropdown, modal, accordion, carousel, tabs, toast).

`css/custom.css` подключается после Bootstrap, чтобы переопределять отдельные стили.

## Страницы

| Страница | Содержание |
| --- | --- |
| `index.html` | шапка, navbar, hero-блок с каруселью, преимущества, популярные товары |
| `catalog.html` | каталог из 6 карточек, фильтр по категориям, пагинация, модальное окно заказа |
| `product.html` | хлебные крошки, описание товара, вкладки (tabs), таблица характеристик, accordion |
| `order.html` | форма заявки с валидацией Bootstrap и уведомлением toast |
| `contacts.html` | контакты и режим работы (дополнительная страница) |

## Реализованные компоненты

- Сетка: `container`, `container-fluid`, `row`, `col-12`, `col-md-*`, `col-lg-*`, `g-*`;
- `navbar` (с `dropdown` и мобильным меню);
- `card`;
- `btn`, `btn-group`;
- `badge`;
- `alert`;
- `modal`;
- `form-control`, `form-select`, `input-group`, `form-check` (чекбоксы и радиокнопки);
- `breadcrumb`, `table`, `list-group`;
- `accordion`, `carousel`, `tabs`, `toast`, `pagination`.

## Самостоятельные доработки

- Bootstrap подключён локально из `vendor/bootstrap/` вместо CDN;
- добавлена страница `contacts.html`;
- каталог расширен до 6 товаров в 3 категориях (инвентарь, защита, аксессуары);
- фильтр каталога по категориям (`btn-group` + небольшой скрипт `js/main.js`);
- пагинация каталога (`pagination`);
- карусель промо-акций на главной (`carousel`);
- вкладки «Описание / Доставка / Отзывы» на странице товара (`tabs`);
- форма заявки: выбор способа получения (радиокнопки), валидация Bootstrap (`needs-validation`, `invalid-feedback`), уведомление `toast` после отправки;
- модальное окно по центру экрана (`modal-dialog-centered`);
- эффект наведения на карточки товаров и «ледовый» градиент шапки в `custom.css`;
- навигация закреплена сверху (`sticky-top`).

## Как проверить

1. Открыть `index.html` — проверить навигацию, карусель и карточки.
2. Открыть `catalog.html` — нажать кнопки фильтра, нажать «Заказать» (откроется модальное окно).
3. Открыть `product.html` — переключить вкладки, раскрыть вопросы accordion.
4. Открыть `order.html` — нажать «Отправить заявку» с пустыми полями (появятся ошибки), затем заполнить и отправить (появится уведомление).
5. В DevTools проверить ширины 375, 768, 1024 и 1440 px.

## Структура проекта

```text
kr2-bootstrap-shop/
├── index.html
├── catalog.html
├── product.html
├── order.html
├── contacts.html
├── css/
│   └── custom.css
├── js/
│   └── main.js
├── vendor/
│   └── bootstrap/
│       ├── css/
│       │   └── bootstrap.min.css
│       └── js/
│           └── bootstrap.bundle.min.js
├── images/
├── README.md
└── .gitignore
```
