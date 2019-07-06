import db from '@/apicloud/db'

/**
 * 任何地方需要使用的话,请先执行一次该init方法(一次就行),再进行其他的增删查改操作
 */

export default new (class Test extends db {
  constructor() {
    super()
    this.tableName = 'test'
    //字段配置请参考SqlLite文档
    this.fieldConfig = {
      id: 'INT'
    }
  }
  init() {
    return this.initTable()
  }
})()
