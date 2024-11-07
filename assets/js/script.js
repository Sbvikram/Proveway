const unitItems = document.querySelectorAll('.unit-item');
const totalElement = document.getElementById('total');

unitItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove active class and uncheck radio for all items
    unitItems.forEach(i => {
      i.classList.remove('active');
      i.querySelector('input[type="radio"]').checked = false;
    });

    // Add active class to clicked item and check radio
    item.classList.add('active');
    item.querySelector('input[type="radio"]').checked = true;

    // Update total based on the selected unit
    const unit = item.dataset.unit;
    let total = 0;
    if (unit === '1') total = 10;
    else if (unit === '2') total = 18;
    else if (unit === '3') total = 24;
    totalElement.textContent = total + '.00 USD';
  });
});
