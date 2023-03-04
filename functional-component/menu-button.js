function makeMenuButton(items, side) {
  const menuBtn = document.createElement('menu-button')

  menuBtn.dataset.side = side
  menuBtn.innerHTML = `
    <button>
      <span>open menu towards ${side}</span>
      <label><input type="checkbox" hidden></label>

      <ul>${
        items.map(item => !item ? '<hr>' 
          : `<li><label>${item}</label></li>`).join('')
      }</ul>
    </button>
  `

  return menuBtn
}
