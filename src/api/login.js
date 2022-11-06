import request from "@/utils/request";

// 获取域列表
export function get_user_fields(data) {
  return request({
    url: "/get_user_fields/",
    method: "post",
    data: { data: JSON.stringify(data) },
  });
}
