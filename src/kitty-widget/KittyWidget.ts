import { getNextKitty } from '../api'

class KittyWidget {
  private _imgElement: HTMLImageElement | null = null

  constructor(private _container: HTMLElement) {
    this._create()
    this._setNextImgSrc()
  }

  async updateKitty() {
    await new Promise(async resolve => {
      this._imgElement.addEventListener('load', () => resolve(undefined))
      await this._setNextImgSrc()
    })
  }

  destroy() {
    this._imgElement = null
    this._container.innerHTML = ''
  }

  private async _create() {
    const div = document.createElement('div')
    const shadowRoot = div.attachShadow({ mode: 'closed' })

    this._imgElement = document.createElement('img')

    const style = document.createElement('style')
    style.textContent = `
      :host {
        width: 100%;
        height: 100%;
      }

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border: 4px dashed green;
      }
    `

    shadowRoot.appendChild(style)
    shadowRoot.appendChild(this._imgElement)

    this._container.appendChild(div)
  }

  private async _setNextImgSrc() {
    const { url } = await getNextKitty()
    this._imgElement.src = url
  }
}

export default KittyWidget
