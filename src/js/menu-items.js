import menuItem from '../templates/menu-item.hbs';
import menu from '../data/menu.json';

const menuList = document.querySelector('.js-menu');
const fullMenu = menuItem(menu);

menuList.insertAdjacentHTML('beforeend', fullMenu);
