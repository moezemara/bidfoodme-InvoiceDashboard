import { createPool } from "mysql"
import config from '../config/config.js'
import RegisterBranch from './RegisterBranch/RegisterBranch.js'

export default class Database {
  constructor() {
    this.pool = createPool({
      port: config.database.port,
      host: config.database.host,
      user: config.database.username,
      password: config.database.password,
      database: config.database.database
    })

    this.RegisterBranch = new RegisterBranch(this.pool)
  }

}