import request from "@/utils/request"

//首页登录
export function apilogin(code) {
  return request({
    url: '/index?code=' + code,
    method: 'get',
    // params:code
  })
}


export function apiUserInfo(data) {
  return request({
    url: "/mobile/repair/fin/maintain/submit",
    method: "post",
    data: data
  })

}

// 管理员检查记录
export function apiadminchecklist(params) {
  return request({
    url: "/mobile/sanitation_check/rank",
    method: "get",
    params: params
  })
}




