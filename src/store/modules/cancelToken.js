const state = {
  cancelTokenArr: [],
};
const mutations = {
  // 添加需要清除的网络请求
  pushCancelToken({ cancelTokenArr }, cancelToken) {
    cancelTokenArr.push(cancelToken);
  },

  //   清空上一个页面的网络请求
  clearCancelToken({ cancelTokenArr }) {
    if (cancelTokenArr.length) {
      cancelTokenArr.forEach((item) => {
        item("路由跳转，取消上一个页面的所有请求");
      });
      cancelTokenArr = [];
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
