import request from './request'

/**
 * 得到当前页的用户列表
 * @param {*} params 分页参数
 * @returns 用户列表
 */
export const getUserList = (params) => {
  return request({
    url: '/users',
    params
  })
}
