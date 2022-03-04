import { json, extractKitty } from './utils'

const getNextKitty = () => {
  return fetch('https://api.thecatapi.com/v1/images/search')
    .then(json)
    .then(extractKitty)
}

export { getNextKitty }
