import { createPool } from "mysql"
import config from '../config/Config.js'
import RegisterBranch from './RegisterBranch/RegisterBranch.js'
import Account from './Account/Account.js'

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
    this.Account = new Account(this.pool)
  }

}