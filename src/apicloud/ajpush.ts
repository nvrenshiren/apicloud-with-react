import { ajpush } from '@/interfaces/apicloud/ajpush'

export default {
  get ajpush() {
    return api.require('ajpush') as ajpush
  },
  init() {
    return new Promise((resolve, reject) => {
      if (api.systemType === 'ios') {
        resolve()
      } else {
        this.ajpush.init((ret, err) => {
          if (ret.status) {
            resolve()
          } else {
            reject(err)
          }
        })
      }
    })
  },
  get setListener() {
    return this.ajpush.setListener
  },
  get removeListener() {
    return this.ajpush.removeListener
  },
  get bindAliasAndTags() {
    return this.ajpush.bindAliasAndTags
  },
  get setSilenceTime() {
    return this.ajpush.setSilenceTime
  },
  get stopPush() {
    return this.ajpush.stopPush
  },
  get resumePush() {
    return this.ajpush.resumePush
  },
  get isPushStopped() {
    return this.ajpush.isPushStopped
  },
  get setBadge() {
    return this.ajpush.setBadge
  },
  get getRegistrationId() {
    return this.ajpush.getRegistrationId
  }
}
