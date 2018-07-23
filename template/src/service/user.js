import api from '../config/api'

import request from '../util/request'
import api from '../config/api'

export function login(data) {
  return request({
    url: api.loginUrl,
    method: 'post',
    data
  })
}
