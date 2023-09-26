// @ts-ignore
import jwt from 'jsonwebtoken'
/**
 * 1、获取token
 * 2、判断token,如果有token，则处理token，之后再验证token
 */
export default defineEventHandler((event) => {
  let token = getHeader(event, 'Authorization')
  if (token) {
    // 处理token
    token = token.replace('Bearer ', '')
    // 密钥
    let secret = 'eifuisedfuvs'
    // 验证token
    try {
      let decoded = jwt.verify(token, secret)
      console.log('111', decoded.data.data.uid)
      // 传递给上下文
      event.context.auth = { uid: decoded.data.data.uid }
    } catch (error) {
      console.log('jwt 解码错误', error)
    }
  }
})
