import mysql from 'mysql2'

// 创建一个数据库连接

export const getDB = () => {
  return mysql
    .createPool({
      host: 'localhost',
      user: 'root',
      database: 'jbook',
      password: 'LI1314920',
      waitForConnections: true,
      connectionLimit: 10,
      maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
      idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0,
    })
    .promise()
}
