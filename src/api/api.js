import request from '@/views/request/request.js'
export const imgsize = (data) => {
  return request.post('/imgsize', data)
}
export const compress = (data) => {
  return request.post('/compress', data)
}
