
const isObject = (v) => ['[object Array]', '[object Object]'].includes(Object.prototype.toString.call(v))
const jsonObject = val => isObject(val) ? JSON.stringify(val) : val

export const Local = {
  set (key, val) {
    localStorage.setItem(key, jsonObject(val))
  },
  get (key) {
    const value = localStorage.getItem(key)
    if (value && /^(\[.*\])|(\{.*\})$/.test(value)) {
      return JSON.parse(value)
    } else {
      return value
    }
  },
  remove (key) {
    localStorage.removeItem(key)
  },
  clear () {
    localStorage.clear()
  }
}
