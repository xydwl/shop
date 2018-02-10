import axios from 'axios'
import qs from 'qs'

const poster = axios.create({
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  transformRequest: [function (data) {
    return qs.stringify(data, { arrayFormat: 'repeat' })
  }]
})
/**
 *
 * @param {*请求的URL与方法} api
 * @param {*请求需要发送的数据} data
 * @param {*事件总线，主要是为了vue中的i18n和message} bus
 * @param {*回调函数，在上传中用于回调进度信息} cb
 */
export function requestControl (api, data, cb = () => {}) {
  switch (api.method.toLowerCase()) {
    case 'post':
      return new Promise((resolve, reject) => {
        poster({
          method: 'post',
          url: api.url,
          data: data,
          timeout: 30 * 1000
        }).then(res => {
          resolve(res)
        }).catch(err => {
          console.log(err)
        })
      })
    case 'get':
      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url: api.url,
          params: Object.assign(data),
          timeout: 30 * 1000
        }).then(res => {
          resolve(res)
          // console.log(res)
        }).catch(err => {
          console.log(err)
        })
      })
    case 'upload':
      return new Promise((resolve, reject) => {
        axios.post(api.url, data, {
          headers: {'Content-Type': 'multipart/form-data'},
          onUploadProgress: progressEvent => {
            cb(progressEvent)
          }
        }).then(res => {
          resolve(res)
        }).catch(err => {
          console.log(err)
        })
      })
    default:
      break
  }
}
