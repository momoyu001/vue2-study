/*
 * @Description:
 * @Author: shengchao.yuan
 * @Date: 2021-06-03 16:25:28
 * @LastEditTime: 2021-06-03 16:46:25
 * @LastEditors: shengchao.yuan
 */
import request from '@/utils/request'

// 获取域列表
export function get_user_fields(data) {
  return request({
    url: '/get_user_fields/',
    method: 'post',
    data: { data: JSON.stringify(data) }
  })
}
