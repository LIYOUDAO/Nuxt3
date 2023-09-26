import { getDB } from '~/server/utils/db/mysql'

export default defineEventHandler(async () => {
  const [rows, fields] = await getDB().query('SELECT * FROM users')
  console.log('user', rows)
})
