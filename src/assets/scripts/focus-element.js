let menuItems = document.querySelectorAll('.list__item');
const logo = document.querySelector('.brand__title');
let activeItem = null;

menuItems = Array.from(menuItems);

menuItems.forEach(item => {
  item.addEventListener('click', (e) => {
    let currentItem = e.target;
    while (!currentItem.classList.contains('list__item')){
      currentItem = currentItem.parentElement;
    }
    if (currentItem === activeItem) return;
    if (!activeItem) {
      activeItem = currentItem;
      activeItem.classList.toggle('list__item--active')
      return;
    }
    activeItem.classList.toggle('list__item--active');
    currentItem.classList.toggle('list__item--active');
    activeItem = currentItem;
  });
});

logo.addEventListener('click', () => {
  if (!activeItem) return;
  activeItem.classList.toggle('list__item--active');
  activeItem = null;
});
