import { getNextKitty } from '../api'

const styles = `
* {
  box-sizing: border-box;
}

:host {
  width: 100%;
  height: 100%;
}

img {
  display: block;
  width: 100%;
  height: calc(100% - 30px - 10px);
  object-fit: cover;
  border: 4px dashed green;
}

button {
  display: block;
  margin: 0 auto;
  height: 30px;
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
}

img + button {
  margin-top: 10px;
}
`

class RandomKittyElement extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'closed' })

    const img = document.createElement('img')

    const updateBtn = document.createElement('button')
    updateBtn.textContent = 'Show next kitty'
    updateBtn.addEventListener('click', () => {
      const updateBtnTitle = updateBtn.textContent

      updateBtn.disabled = true
      updateBtn.textContent = 'Loading...'

      img.addEventListener('load', () => {
        updateBtn.disabled = false
        updateBtn.textContent = updateBtnTitle
      })

      getNextKitty().then(({ url }) => {
        img.src = url
      })
    })

    const style = document.createElement('style')
    style.textContent = styles

    shadowRoot.appendChild(style)
    shadowRoot.appendChild(img)
    shadowRoot.appendChild(updateBtn)

    getNextKitty().then(({ url }) => {
      img.src = url
    })
  }
}

export default RandomKittyElement
