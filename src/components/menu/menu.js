export default class Menu {
  constructor(parent) {
    this.parent = parent;
    this.link = Array.from(this.parent.querySelectorAll('.menu__btn'));
    this.section = Array.from(document.querySelectorAll('div[data-section]'));

    this.link.forEach(item => {
      item.addEventListener('click', () => {
        this.section.forEach(elem =>
          item.getAttribute('data-link') === elem.getAttribute('data-section')
            ? elem.scrollIntoView({ behavior: 'smooth' })
            : null,
        );
      });
    });
  }
}
