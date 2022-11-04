const dayjs = require('dayjs')

const filterTime = (val, format = 'YYYY-MM-DD') => {
  if (!isNull(val)) {
    return dayjs(val).format(format)
  } else {
    return '--'
  }
}

const isNull = (data) => {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
  return false
}

export default (app) => {
  app.config.globalProperties.$filters = {
    filterTime
  }
}
