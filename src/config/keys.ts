import DEV from './dev'

interface KEYS {
  JWT_SECRET: string,
  DB_PASSWORD: string
}

let keys: KEYS

if (process.env.NODE_ENV === 'development') {
  keys = { ...DEV }
} else {
  // TODO: add production config
  keys = { ...DEV }
}

export default keys
