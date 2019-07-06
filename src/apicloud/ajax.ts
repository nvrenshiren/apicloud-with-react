import {
  ajaxParams,
  ajaxReturnAll,
  ajaxUpReport
} from '@/interfaces/apicloud/api.params'
import apiUtil from './api.util'

export default new (class {
  timeout = 50
  get<RetData>(params: ajaxParams): Promise<RetData> {
    return new Promise((resolve, reject) => {
      params.method = 'get'
      params.timeout = params.timeout || this.timeout
      api.ajax<{}, RetData>(params, (ret: RetData, err) => {
        if (ret) {
          resolve(ret)
        } else {
          reject(err)
        }
      })
    })
  }
  post<PostData, RetData>(
    params: ajaxParams<PostData>
  ): Promise<ajaxReturnAll<RetData>> {
    return new Promise((resolve, reject) => {
      params.method = 'post'
      params.returnAll = true
      params.timeout = params.timeout || this.timeout
      api.ajax<PostData, RetData>(
        params,
        (ret: ajaxReturnAll<RetData>, err) => {
          if (ret) {
            resolve(ret)
          } else {
            reject(err)
          }
        }
      )
    })
  }
  upload<RetData>(params: ajaxParams): Promise<ajaxUpReport<RetData>> {
    return new Promise((resolve, reject) => {
      params.method = 'post'
      params.report = true
      params.timeout = params.timeout || this.timeout
      api.ajax<{}, RetData>(params, (ret: ajaxUpReport<RetData>, err) => {
        if (!!ret) {
          switch (ret.status) {
            case 0:
              apiUtil.showProgress(`${ret.progress}%....`)
              break
            case 1:
              resolve(ret)
              break
            case 2:
              reject(err)
              break
          }
        } else {
          reject(err)
        }
      })
    })
  }
})()
