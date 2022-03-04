import { Kitty } from './model'

const json = (response: Response) => response.json()

const extractKitty = (result: Array<Kitty>): Kitty => {
  const [{ id, url, width, height }] = result

  return {
    id,
    url,
    width,
    height,
  }
}

export { json, extractKitty }
