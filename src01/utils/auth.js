import storage from '@/assets/js/storage'

export function getToken() {
  return storage.get('TokenKey')
}

export function setToken(token) {
  storage.set('TokenKey',token)
}

export function removeToken() {
  storage.remove('TokenKey')
}