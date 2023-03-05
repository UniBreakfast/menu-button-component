export { PanWrapList }

class PanWrapList {
  constructor(parent) {
    const pan = document.createElement('horizontal-pan')
    const list = document.createElement('wrap-list')

    parent.appendChild(pan).append(list)

    this.element = list
  }

  list(arr) {
    this.element.replaceChildren(...arr.map(item => {
      const li = document.createElement('li')

      li.textContent = item

      return li
    }))
  }
}
