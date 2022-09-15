
import { Toast } from "vant";
//允许同时存在多个 Toast
Toast.allowMultiple();

let dataurl = "/api";
const Http = function () {
//   let DeviceID = localStorage.DeviceID;
//   if (!DeviceID) {
//     // DeviceID = Guid.NewGuid().ToString('D');
//     localStorage.DeviceID = DeviceID;
//   }
//   this.DeviceID = DeviceID;
};

Http.prototype.fetch = function (url, method, params = {}) {
  url = dataurl + url;
  //fetch 的跨域  mode:"cors"  
  let config = { method: method, mode: "cors" };
  //判断是否为wx内置浏览器
  var ua = navigator.userAgent.toLowerCase();
//   if (ua.match(/MicroMessenger/i) == "micromessenger") {
//     config.headers = {
//       DeviceType: "WXH5",
//       DeviceID: this.DeviceID,
//     };
//   } else {
    config.headers = {
      
      DeviceType: "H5",
      DeviceID: this.DeviceID,
    };
//   }
  //请求loading
  Toast.loading({
    message: "加载中",
    className: "toast-loading",
  });

  if (params instanceof FormData) {
    config.body = params;
  } else {
    // fetch 的get 与  head
    if (method == "get" || method == "head") {
      if (url.indexOf("?") > 0) {
        url += "&";
      } else {
        url += "?";
      }
      for (let key in params) {
        url += key + "=" + params[key] + "&";
      }
    } else { 
    //  post请求  delete
      config.body = JSON.stringify(params);
    }
    
    config.headers["Content-Type"] = "application/json";
  }

//   如果登录成功 如果需要用户登录状态请求数据 需要在请求头中携带Authorization  要求 "Bearer "+token;
  if (localStorage.adminToken) {
    config.headers.Authorization = "Bearer " + localStorage.adminToken;
  }


  return new Promise((resolve, reject) => {
    // es6的fetch
    fetch(url, config).then(async (res) => {
      Toast.clear();
      if (res.status == 200) {
        let data = await res.json();
        if (data.code == 200) {
          resolve(data.data || data);
        } else {
          if (data.code == 202) {
            // plugins.checkLogin(false)
          } else if (data.code == 203) {
            resolve(data);
          } else {
            Toast({
              message: data.msg,
              duration: 1000,
              forbidClick: true,
            });
          }
        }
      } else {
        reject(res.statusText);
      }
    });
  });
};
Http.prototype.get = function (url, params) {
  return this.fetch(url, "get", params);
};
Http.prototype.post = function (url, params) {
  return this.fetch(url, "post", params);
};
Http.prototype.put = function (url, params) {
  return this.fetch(url, "put", params);
};
Http.prototype.delete = function (url, params) {
  return this.fetch(url, "delete", params);
};

export default new Http();