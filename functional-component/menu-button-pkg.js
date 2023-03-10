function makeMenuButton(label, items, side) {
  const menuBtn = document.createElement('menu-button')

  menuBtn.dataset.side = side
  menuBtn.innerHTML = `
    <button>
      <span>${label}</span>
      <label><input type="checkbox" hidden></label>

      <ul>${
        items.map(item => !item ? '<hr>' 
          : `<li><label>${item}</label></li>`).join('')
      }</ul>
    </button>
  `

  if (!stylesAdded) {
    const sheet = document.styleSheets[0] 
      || document.head.appendChild(document.createElement('style')).sheet
    
    rules.forEach(rule => sheet.insertRule(rule, sheet.cssRules.length))
    stylesAdded = true
  }

  return menuBtn
}

let stylesAdded = false

const rules = `
menu-button {
  display: inline-block;
  /* position: relative; */
}

menu-button>button {
  background: #ddd;
  padding: 5px 10px;
  position: relative;
}

menu-button>button>label {
  position: absolute;
  inset: 0;
}

menu-button>button>label:has(:checked) {
  position: fixed;
  z-index: 1;
}

menu-button label {
  cursor: pointer;
}

menu-button>button>ul {
  position: absolute;
  z-index: 1;
  background: #ddd;
  transform: translateY(7px);
}

menu-button>button>:not(:has(:checked))+ul {
  display: none;
}

menu-button>button>ul>li {
  padding: 5px 10px;
  width: max-content;
}

menu-button>button>ul>hr {
  height: 1px;
  background: #aaa;
  margin: 5px 0;
}

menu-button[data-side=down]>button>ul {
  left: 50%;
  top: 100%;
  transform: translateX(-50%) translateY(2px);
}

menu-button[data-side=down-left]>button>ul {
  right: 0;
  top: 100%;
  transform: translateY(2px);
}

menu-button[data-side=down-right]>button>ul {
  left: 0;
  top: 100%;
  transform: translateY(2px);
}

menu-button[data-side=up]>button>ul {
  left: 50%;
  bottom: 100%;
  transform: translateX(-50%) translateY(-2px);
}

menu-button[data-side=up-left]>button>ul {
  right: 0;
  bottom: 100%;
  transform: translateY(-2px);
}

menu-button[data-side=up-right]>button>ul {
  left: 0;
  bottom: 100%;
  transform: translateY(-2px);
}

menu-button[data-side=left]>button>ul {
  right: 100%;
  top: 50%;
  transform: translateX(-2px) translateY(-50%);
}

menu-button[data-side=left-up]>button>ul {
  right: 100%;
  bottom: 0;
  transform: translateX(-2px);
}

menu-button[data-side=left-down]>button>ul {
  right: 100%;
  top: 0;
  transform: translateX(-2px);
}

menu-button[data-side=right]>button>ul {
  left: 100%;
  top: 50%;
  transform: translateX(2px) translateY(-50%);
}

menu-button[data-side=right-up]>button>ul {
  left: 100%;
  bottom: 0;
  transform: translateX(2px);
}

menu-button[data-side=right-down]>button>ul {
  left: 100%;
  top: 0;
  transform: translateX(2px);
}

menu-button[data-side=center]>button>ul {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}

menu-button[data-side=own-center]>button>ul {
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
`.split('\n\n')
