import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse, AxiosPromise, Canceler } from 'axios'
import { useMainStore } from "/@/store"
const mainStore = useMainStore()
export interface HttpResponse {

}

class HttpRequest {
  private baseUrl: string
  instance: AxiosInstance
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
    this.instance = axios.create()
  }
  // 基础配置
  baseConfig() {
    return {
      baseURL: this.baseUrl ? this.baseUrl : process.env.API_ROOT,
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      timeout: 10000
    }
  }
  // 拦截器
  interceptors(service: AxiosInstance) {
    service.interceptors.request.use((config: AxiosRequestConfig) => {
      const token = mainStore.token

    })
    service.interceptors.response.use((res: AxiosResponse) => {
      
    })
  }
  // 创建实例
  request(options: AxiosRequestConfig) {
    const newOptions = Object.assign(this.baseConfig(), options)
    this.interceptors(this.instance)
    return this.instance(newOptions)
  }

  // 请求方法
  post(url: string, data?: unknown): Promise<AxiosResponse> | Promise<HttpResponse> {
    return this.request({
      method: 'post',
      url: url,
      data: data
    })
  }
  get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> | Promise<HttpResponse> {
    const options = Object.assign({
      method: 'get',
      url: url
    }, config)
    return this.request(options)
  }
  update() {

  }
  download() {

  }
  delete() {
    
  }
}

export default HttpRequest