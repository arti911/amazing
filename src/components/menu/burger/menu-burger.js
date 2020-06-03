export default class MenuBurger {
  constructor(parent) {
    this.parent = parent;
    this.menu = document.querySelector('.menu');

    this.parent.addEventListener('click', () =>
      !this.menu.classList.contains('menu--open')
        ? this.menu.classList.add('menu--open')
        : this.menu.classList.remove('menu--open'),
    );
  }
}
