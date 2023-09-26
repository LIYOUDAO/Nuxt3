interface myFetchOptions {
  headers?: Record<string, string>
  [key: string]: any
}

export const useHttpFetch = (url: string, opt: myFetchOptions) => {
  // token
  const token = useCookie('token')
  const headers = {
    ...opt.headers,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }
  opt.headers = headers

  return useFetch(url, {
    ...opt,
    baseURL: '', // 基本url

    onRequest({ request, options }) {
      // 设置请求头
      // console.log('request', request)
    },
    onRequestError({ request, options, error }) {
      // console.log('request', request)
      // 处理请求错误
    },
    onResponse({ request, response, options }) {
      // 处理响应数据
      // localStorage.setItem('token', response._data.token)
      // console.log('response', response)
    },
    onResponseError({ request, response, options }) {
      // 处理响应错误
    },
  })
}

// 定义接口

export const userInfoFetch = (opt: myFetchOptions) => {
  return useHttpFetch('user/info', opt)
}
