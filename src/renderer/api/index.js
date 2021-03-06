import Qs from 'qs'
import axois from 'axios'
import { doubanApi } from 'config/config'
import Util from './util'

export default {
  fetchGetChatList({ start, count, token }) {
    const params = Qs.stringify({
      start: start,
      count: count,
      apikey: '0dad551ec0f84ed02907ff5c42e8ec70',
      os_rom: 'miui6',
      channel: 'Xiaomi_Market',
      udid: '8a2a02080cd222dfd017d22833736a7ee3a9bae5'
        // _sig: 'uzi16lcNw1VnY/aoq4t0SmK7Qno%3D',
        // _ts: '1496901875'
    })
    const url = doubanApi.getChatListUrl + `?${params}`
    return Util.fetchData(url, {
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
  },
  fetchGetChatMessages({ chatId, earliestMessageId, start, count, token }) {
    const params = Qs.stringify({
      // start: start,
      type: 'private',
      cid: chatId,
      max_id: earliestMessageId || 0,
      count: count,
      apikey: '0dad551ec0f84ed02907ff5c42e8ec70',
      os_rom: 'miui6',
      channel: 'Xiaomi_Market',
      udid: '8a2a02080cd222dfd017d22833736a7ee3a9bae5'
    })
    const url = doubanApi.getChatMessagesUrl + `?${params}`
    return Util.fetchData(url, {
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
  },
  fetchPostChatMessage({userId, message, token}) {
    const timestamp = Date.now()

    const url = doubanApi.postChatMessageOfUserIdUrl(userId)

    const postData = Qs.stringify({
      nonce: timestamp,
      text: message,
      apikey: '0dad551ec0f84ed02907ff5c42e8ec70',
      os_rom: 'miui6',
      channel: 'Xiaomi_Market',
      udid: '8a2a02080cd222dfd017d22833736a7ee3a9bae5'
    })

    return Util.fetchData(url, {
      method: 'post',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: postData
    })
  },
  fetchSyncChatMessage({ syncId, token }) {
    const params = Qs.stringify({
      type: 'private',
      sync_id: syncId,
      start: 0,
      count: 20,
      apikey: '0dad551ec0f84ed02907ff5c42e8ec70',
      os_rom: 'miui6',
      channel: 'Xiaomi_Market',
      udid: '8a2a02080cd222dfd017d22833736a7ee3a9bae5'
    })
    const url = doubanApi.syncChatMessageUrl + `?${params}`
    return Util.fetchData(url, {
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
  },
  fetchReadChatMessages({ userId, lastMessageId, token }) {
    const postData = Qs.stringify({
      last_read_id: lastMessageId,
      apikey: '0dad551ec0f84ed02907ff5c42e8ec70',
      os_rom: 'miui6',
      channel: 'Xiaomi_Market',
      udid: '8a2a02080cd222dfd017d22833736a7ee3a9bae5'
    })
    const url = doubanApi.readChatMessagesOfUserIdUrl(userId)
    return Util.fetchData(url, {
      method: 'post',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: postData
    })
  },
  fetchGetFollowing({ userId, count, token }) {
    const params = Qs.stringify({
      count: count,
      apikey: '0dad551ec0f84ed02907ff5c42e8ec70',
      os_rom: 'miui6',
      channel: 'Xiaomi_Market',
      udid: '8a2a02080cd222dfd017d22833736a7ee3a9bae5'
        // _sig: 'uzi16lcNw1VnY/aoq4t0SmK7Qno%3D',
        // _ts: '1496901875'
    })
    const url = doubanApi.getFollowingUrl(userId) + `?${params}`
    return Util.fetchData(url, {
      method: 'get'
        // headers: {
        //   'Authorization': 'Bearer ' + token
        // }
    })
  },
  fetchGetHomeTimeline({ token }) {
    const params = Qs.stringify({
      count: 15,
      last_visit_id: '1998734305',
      apikey: '0dad551ec0f84ed02907ff5c42e8ec70',
      os_rom: 'miui6',
      channel: 'Xiaomi_Market',
      udid: '8a2a02080cd222dfd017d22833736a7ee3a9bae5'
        // _sig: 'uzi16lcNw1VnY/aoq4t0SmK7Qno%3D',
        // _ts: '1496901875'
    })
    const url = doubanApi.getHomeTimelineUrl + `?${params}`
    return Util.fetchData(url, {
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
  },
  fetchGetHasNewRecs({ token }) {
    const params = Qs.stringify({
      // count: 15,
      // last_visit_id: '1998734305',
      apikey: '0dad551ec0f84ed02907ff5c42e8ec70',
      os_rom: 'miui6',
      channel: 'Xiaomi_Market',
      udid: '8a2a02080cd222dfd017d22833736a7ee3a9bae5'
        // _sig: 'uzi16lcNw1VnY/aoq4t0SmK7Qno%3D',
        // _ts: '1496901875'
    })
    const url = doubanApi.getHasNewRecsUrl + `?${params}`
      // return Util.fetchData(url, {
      //   method: 'get',
      //   headers: {
      //     'Authorization': 'Bearer ' + token
      //   }
      // })
    return axois.get(url, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
  }
}
