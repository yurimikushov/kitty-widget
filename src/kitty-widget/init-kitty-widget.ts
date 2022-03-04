import KittyWidget from './KittyWidget'

// @ts-expect-error bad typing
window.init = (container: HTMLElement) => {
  const widget = new KittyWidget(container)

  // @ts-expect-error bad typing
  window.widget = widget

  return widget
}
