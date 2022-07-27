export class Section {
  constructor ({ items, renderer }, sectionSelector) {
    this._items = items;
    this._renderer = renderer;
    this._section = document.querySelector(sectionSelector);
  }

  renderItems() {
    this._items.forEach(element => {
      this.addItem(this._renderer(element));
    });
  }

  addItem(element) {
    this._section.prepend(element);
  }
}
