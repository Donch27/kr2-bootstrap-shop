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
