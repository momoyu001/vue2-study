import axios from "axios";
import { Loading } from "element-ui";
import _ from "lodash";
import store from "@/store";
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});

// 取消cancelToken
const CancelToken = axios.CancelToken;
// loding
let loading = null;
let requestCount = 0;
const showLoading = function (target) {
  if (!loading && requestCount === 0) {
    loading = Loading.service({
      lock: true,
      text: "加载中...",
      background: "rgba(0, 0, 0, 0.5)",
      target: target || "body",
    });
  }
  requestCount++;
};

// 关闭loading
const hideLoading = function () {
  requestCount--;
  if (requestCount <= 0) {
    // 关闭loading
    debounce();
  }
};

const debounce = _.debounce(() => {
  if (requestCount == 0) {
    loading ? loading.close() : (loading = null);
    loading = null;
  }
}, 300);

service.interceptors.request.use(
  (config) => {
    showLoading(config.headers.loadingTarget);
    // 是否需要清空上一页面的请求
    config.cancelToken = new CancelToken(function (cancel) {
      if (
        config.headers.needCancel ||
        typeof config.headers.needCancel == "undefined"
      ) {
        store.commit("cancelToken/pushCancelToken", cancel);
      }
    });

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    hideLoading();
    return response;
  },
  (error) => {
    hideLoading();
    return Promise.reject(error);
  }
);

export default service;
