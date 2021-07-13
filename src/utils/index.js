import defaultImg from 'assets/images/default.jpg'

export { default as SomosClient } from './client.js'
export { getOauthClient } from './oauth'
export { getToken, setToken, clearToken } from './token'

export const renderCoverImg = imgs => {
  return !!imgs.length ? imgs[0].url : defaultImg
}
