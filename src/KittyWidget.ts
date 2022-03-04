import { getNextKitty } from './api'

class KittyWidget {
  private _imgElement: HTMLImageElement | null = null

  constructor(private _container: HTMLElement) {
    this._create()
    this._setNextImgSrc()
  }

  async updateKitty() {
    await this._setNextImgSrc()
  }

  destroy() {
    this._imgElement = null
    this._container.innerHTML = ''
  }

  private async _create() {
    this._imgElement = document.createElement('img')
    this._imgElement.classList.add('kitty-widget')

    const style = document.createElement('style')
    style.textContent = `
      .kitty-widget {
        display: block;
        width: 100%;
        height: 100%;
        border: 4px dashed green;
      }
    `

    this._container.appendChild(this._imgElement)
    document.head.appendChild(style)
  }

  private async _setNextImgSrc() {
    const { url } = await getNextKitty()
    this._imgElement.src = url
  }
}

export default KittyWidget
