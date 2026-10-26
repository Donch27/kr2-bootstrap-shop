// Данные товаров: одна страница product.html показывает любой товар по ?id=N
var products = [
  {
    id: 1, name: 'Хоккейная клюшка', price: 8990, badge: 'Новинка', badgeClass: 'bg-success',
    lead: 'Карбоновая клюшка весом 390 г с загибом P92 для точного броска.',
    description: 'Лёгкая карбоновая клюшка для игроков среднего и высокого уровня. Низкая точка прогиба помогает быстро выполнять кистевой бросок, а загиб P92 подходит для большинства игроков. Прорезиненная рукоятка не скользит в перчатках.',
    specs: [['Категория', 'Инвентарь'], ['Материал', 'Карбон'], ['Вес', '390 г'], ['Загиб', 'P92'], ['Жёсткость', '75 flex']],
    reviews: [['Максим', 'Очень лёгкая, бросок стал заметно сильнее.'], ['Дмитрий', 'Отличный баланс, рукоятка не скользит.']]
  },
  {
    id: 2, name: 'Хоккейные коньки', price: 12990, badge: 'Хит', badgeClass: 'bg-warning text-dark',
    lead: 'Коньки с жёстким ботинком, термоформовкой и стальным лезвием.',
    description: 'Коньки для быстрого старта и резких поворотов. Жёсткий ботинок надёжно фиксирует голеностоп, а после термоформовки принимает форму ноги. Лезвие из нержавеющей стали долго держит заточку.',
    specs: [['Категория', 'Инвентарь'], ['Размеры', '38–46'], ['Ботинок', 'Термоформуемый композит'], ['Лезвие', 'Нержавеющая сталь'], ['Заточка', 'Первая — бесплатно']],
    reviews: [['Анна', 'Отлично держат ногу, после термоформовки очень удобно.'], ['Игорь', 'Быстрые коньки, хорошая защита щиколотки.'], ['Павел', 'Заточку держат долго, рекомендую.']]
  },
  {
    id: 3, name: 'Шлем с визором', price: 6490, badge: 'Скидка', badgeClass: 'bg-danger',
    lead: 'Шлем с регулировкой размера и прозрачным защитным визором.',
    description: 'Прочный шлем с внутренней пеной, гасящей удары. Размер регулируется без инструментов, а визор из поликарбоната защищает глаза и не запотевает.',
    specs: [['Категория', 'Защита'], ['Размеры', 'S, M, L'], ['Визор', 'Поликарбонат, антизапотевание'], ['Регулировка', 'Без инструментов'], ['Вес', '520 г']],
    reviews: [['Артём', 'Сидит плотно, визор не запотевает.'], ['Олег', 'Лёгкий и удобный, размер подобрал быстро.']]
  },
  {
    id: 4, name: 'Хоккейные краги', price: 4590, badge: 'Новинка', badgeClass: 'bg-success',
    lead: 'Перчатки с усиленной защитой пальцев и мягкой ладонью.',
    description: 'Краги с сегментированной защитой, которая не мешает двигать кистью. Тонкая ладонь даёт хорошее чувство клюшки, а вентиляционные отверстия отводят влагу.',
    specs: [['Категория', 'Защита'], ['Размеры', '12", 13", 14"'], ['Ладонь', 'Нанолён'], ['Защита пальцев', 'Усиленная'], ['Вентиляция', 'Есть']],
    reviews: [['Никита', 'Кисть двигается свободно, защита хорошая.'], ['Сергей', 'Ладонь тонкая, клюшку чувствуешь отлично.']]
  },
  {
    id: 5, name: 'Набор шайб (10 шт.)', price: 1290, badge: 'Хит', badgeClass: 'bg-warning text-dark',
    lead: 'Официальный вес 170 г, подходят для тренировок и игр.',
    description: 'Набор из десяти шайб из вулканизированной резины официального размера и веса. Подходят для тренировок на льду и бросков в зале.',
    specs: [['Категория', 'Аксессуары'], ['Количество', '10 шт.'], ['Вес шайбы', '170 г'], ['Диаметр', '76 мм'], ['Материал', 'Вулканизированная резина']],
    reviews: [['Илья', 'Нормальные шайбы, хватает на весь сезон.']]
  },
  {
    id: 6, name: 'Хоккейная сумка', price: 5290, badge: 'Скидка', badgeClass: 'bg-danger',
    lead: 'Вместительная сумка на колёсах для всей экипировки.',
    description: 'Сумка на прочных колёсах вмещает полный комплект формы. Отдельный карман для коньков и вентилируемое отделение для влажной экипировки.',
    specs: [['Категория', 'Аксессуары'], ['Объём', '120 л'], ['Колёса', 'Есть'], ['Карман для коньков', 'Есть'], ['Материал', 'Водоотталкивающий полиэстер']],
    reviews: [['Роман', 'Влезает вся форма, колёса крепкие.'], ['Евгений', 'Удобный отдельный карман для коньков.']]
  }
];

function formatPrice(value) {
  return value.toLocaleString('ru-RU') + ' руб.';
}

// Страница товара: берём id из адреса (product.html?id=3) и подставляем данные
var productTitle = document.getElementById('product-title');

if (productTitle) {
  var params = new URLSearchParams(window.location.search);
  var id = Number(params.get('id')) || 1;
  var product = products.find(function (p) { return p.id === id; }) || products[0];

  document.title = product.name + ' — Hockey Shop';
  productTitle.textContent = product.name;
  document.getElementById('product-breadcrumb').textContent = product.name;
  document.getElementById('product-lead').textContent = product.lead;
  document.getElementById('product-price').textContent = formatPrice(product.price);
  document.getElementById('product-description').textContent = product.description;

  var badge = document.getElementById('product-badge');
  badge.textContent = product.badge;
  badge.className = 'badge mb-3 ' + product.badgeClass;

  var image = document.getElementById('product-image');
  image.src = 'images/product-' + product.id + '.jpg';
  image.alt = product.name;

  document.getElementById('product-order-link').href = 'order.html?product=' + product.id;

  document.getElementById('product-specs').innerHTML = product.specs.map(function (row) {
    return '<tr><th scope="row">' + row[0] + '</th><td>' + row[1] + '</td></tr>';
  }).join('');

  document.getElementById('product-reviews').innerHTML = product.reviews.map(function (r) {
    return '<div class="list-group-item"><strong>' + r[0] + ':</strong> ' + r[1] + '</div>';
  }).join('');
  document.getElementById('product-reviews-count').textContent = product.reviews.length;
}

// Форма заявки: если пришли со страницы товара (order.html?product=3), выбираем его в списке
var productSelect = document.getElementById('order-product');

if (productSelect) {
  var selected = new URLSearchParams(window.location.search).get('product');
  if (selected) {
    productSelect.value = 'product-' + selected;
  }
}

// Фильтр каталога по категориям
document.querySelectorAll('[data-filter]').forEach(function (button) {
  button.addEventListener('click', function () {
    var filter = button.dataset.filter;

    document.querySelectorAll('[data-filter]').forEach(function (b) {
      b.classList.remove('active');
    });
    button.classList.add('active');

    document.querySelectorAll('.product-item').forEach(function (item) {
      var show = filter === 'all' || item.dataset.category === filter;
      item.classList.toggle('d-none', !show);
    });
  });
});

// Валидация формы заявки (Bootstrap validation) и уведомление toast
var orderForm = document.getElementById('orderForm');

if (orderForm) {
  orderForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!orderForm.checkValidity()) {
      orderForm.classList.add('was-validated');
      return;
    }

    orderForm.classList.remove('was-validated');
    orderForm.reset();

    var toastElement = document.getElementById('orderToast');
    if (toastElement) {
      bootstrap.Toast.getOrCreateInstance(toastElement).show();
    }
  });
}
