import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class HTTPRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    this.instance.interceptors.response.use((res) => {
      return res.data
    }, err => {
      return err;
    })
  }
  request(config) {
    return this.instance.request(config)
  }
  get(config) {
    return this.request({ ...config, method: 'get' })
  }
  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}

// 创建实例
const HTTPRequestInstance = new HTTPRequest(BASE_URL, TIMEOUT);

export default HTTPRequestInstance;