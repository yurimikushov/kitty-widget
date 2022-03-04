import './init-kitty-widget'

class KittyWidgetFactory {
  static create(container: HTMLElement) {
    const iframe = document.createElement('iframe')
    document.head.appendChild(iframe)

    const script = document.createElement('script')
    script.src = './init-kitty-widget.js'

    const result = new Promise(resolve => {
      script.addEventListener('load', () => {
        resolve(undefined)
      })
    }).then(() => {
      // @ts-expect-error init() method will appended by `kitty-widget-init.js`
      return iframe.contentWindow.init(container)
    })

    iframe.contentDocument.head.appendChild(script)

    return result
  }
}

export default KittyWidgetFactory
