import 'normalize.css';
import '@fortawesome/fontawesome-free/css/all.css';

import Menu from './components/menu/menu';
import MenuBurger from './components/menu/burger/menu-burger';

import './main.scss';

const menu = Array.from(document.querySelectorAll('.menu-burger'));
menu.forEach(item => new MenuBurger(item));
Array.from(document.querySelectorAll('.menu').forEach(item => new Menu(item)));
