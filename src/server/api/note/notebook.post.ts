import Joi from 'joi'
import { getDB } from '~/server/utils/db/mysql'
import { getLoginUid, responseJson } from '~/server/utils/helper'

/**
 * 1、判断用户是否登陆
 * 2、已登陆则创建文集
 */

export default defineEventHandler(async (event) => {
  // 判断用户登陆
  let uid = getLoginUid(event)
  if (uid === 0) {
    setResponseStatus(event, 401)
    return responseJson(1, '请先登陆', {})
  }

  //获取数据
  const body = await readBody(event)
  console.log('11111', body)

  //校验数据joi
  const schema = Joi.object({
    name: Joi.string().required(),
  })

  try {
    const value = await schema.validateAsync(body)
  } catch (err) {
    return responseJson(1, '参数错误', {})
  }

  const con = getDB()
  try {
    //创建账号
    const [rows] = await con.execute(
      'INSERT INTO `notebooks` (`name`,`uid`) value (?,?)',
      [body.name, uid]
    )
    console.log('333333', rows)
    //释放连接
    await con.end()
    if (rows.affectedRows === 0) {
      return responseJson(1, '创建失败', {})
    }
    return responseJson(0, '创建文集成功', {})
  } catch (e) {
    //释放连接
    console.log('错误信息', e)

    await con.end()
    setResponseStatus(event, 500)
    return responseJson(1, '服务器错误', {})
  }
})
