export interface selectParams {
  where?: string
  files?: string[]
  table?: string
  order?: string
  limit?: number
  start?: number
}

interface sqlRet {
  status: boolean //布尔类型；操作成功状态值，true|false
  code: number //数字类型；错误码，详情参考-----附录之‘错误码对照表’。，仅当 status 为 false 时有值。本参数暂仅支持iOS平台
  msg?: string //字符串类型；错误描述，仅当 status 为 false 时有值
}

interface selectRet extends sqlRet {
  data: any[] //数组类型；查询结果数据
}

export default class {
  private dbName: string
  public tableName: string
  public fieldConfig: Object
  constructor() {
    this.dbName = 'appdb'
  }
  get db() {
    return api.require('db')
  }
  public initTable(): selectRet {
    let getTable = this.select({
      where: `type='table'&&name='${this.tableName}'`,
      files: ['*'],
      table: 'sqlite_master'
    })
    if (getTable.status) {
      // 库已经打开
      if (getTable.data.length > 0) {
        // 表存在
        return getTable
      } else {
        // 表不存在
        let create = this.create()
        return create.status && this.initTable()
      }
    } else {
      // 库没开
      let opendb = this.open()
      return opendb.status && this.initTable()
    }
  }
  public select(params: selectParams) {
    params.table = params.table || this.tableName
    let sql = this.sqls(params)
    return this.selectSqlSync(
      `SELECT ${params.files.toString()} FROM ${params.table} ${sql}`
    )
  }
  public insert(data: any, tableName?: string) {
    let keys: string[] = []
    let vals: any[] = []
    Object.keys(this.fieldConfig).map((key) => {
      keys.push(key)
      let type = this.fieldConfig[key]
      if (type === 'INT') {
        vals.push(isNaN(Number(data[key])) ? 0 : Number(data[key]))
      } else {
        vals.push(
          `'${
            typeof data[key] === 'object'
              ? JSON.stringify(data[key])
              : data[key]
          }'`
        )
      }
    })
    return this.executeSqlSync(
      `INSERT INTO ${tableName ||
        this.tableName} (${keys.toString()}) VALUES (${vals.toString()})`
    )
  }
  public update(data: Object, params: selectParams) {
    let update: string[] = []
    let tableName = params
      ? params.table
        ? params.table
        : this.tableName
      : this.tableName

    Object.keys(data).map((key) => {
      if (key in this.fieldConfig) {
        if (!isNaN(Number(data[key]))) {
          update.push(key + '=' + Number(data[key]))
        } else {
          let val =
            typeof data[key] === 'object'
              ? JSON.stringify(data[key])
              : data[key]
          update.push(key + "='" + val + "'")
        }
      }
    })
    return this.executeSqlSync(
      `UPDATE ${tableName} SET ${update.toString()} ${this.sqls(params)}`
    )
  }
  public delete(params: selectParams) {
    params.table = params.table || this.tableName
    return this.executeSqlSync(
      `DELETE FROM ${params.table} ${this.sqls(params)}`
    )
  }
  public drop(tableName?: string) {
    let table = tableName || this.tableName
    return this.executeSqlSync(`DROP TABLE ${table}`)
  }
  private open(): sqlRet {
    return this.db.openDatabaseSync({
      name: this.dbName
    })
  }
  private create() {
    let files = Object.keys(this.fieldConfig).map((key) => {
      return key + ' ' + this.fieldConfig[key]
    })
    return this.executeSqlSync(
      `CREATE TABLE ${this.tableName} (${files.toString()})`
    )
  }
  private sqls(params: selectParams) {
    let sql = ''
    if (params.where) {
      sql += 'where ' + params.where.replace(/&&/g, ' AND ')
      sql = sql.replace(/\|\|/g, ' or ')
    }
    if (params.order) {
      sql += ' order by ' + params.order
    }
    if (params.limit && params.limit > 0) {
      sql += ' limit ' + params.limit
    }
    if (params.start) {
      sql += ' offset ' + params.start
    }
    return sql
  }
  private executeSqlSync(sql: string): sqlRet {
    return this.db.executeSqlSync({
      name: this.dbName,
      sql: sql
    })
  }
  private selectSqlSync(sql: string): selectRet {
    return this.db.selectSqlSync({
      name: this.dbName,
      sql: sql
    })
  }
}
