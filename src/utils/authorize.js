import { TOKEN_TIME, TOKEN_TIME_VALUE } from './constant'

/**
 * 登录时设置时间
 */
export const setTokenTime = () => {
  localStorage.setItem(TOKEN_TIME, Date.now())
}

/**
 * 获取时间
 * @returns localStorage.getItem(TOKEN_TIME)
 */
export const getTokenTime = () => {
  return localStorage.getItem(TOKEN_TIME)
}

/**
 * 判断是否过期
 * @returns boolean值，true为过期，反之。
 */
export const diffTokenTime = () => {
  const curTime = Date.now()
  const tokenTime = localStorage.getItem(TOKEN_TIME)
  return curTime - tokenTime > TOKEN_TIME_VALUE
}
