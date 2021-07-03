import axios from 'axios';
import { Loading , Message } from 'element-ui';
import {hideLoading, showLoading} from './loading'


const BASE_URL =  'http://localhost:3000/'; //域名路径

const formatParams = (data)=>{
    let arr = [];
    for (let name in data) {
        arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
    }
    return arr.join("&");
}

axios.defaults.timeout = 15000; //超时时间

export const httpService = (url,params,method,loading=true) => {
    if(loading)
    {
        var loadingInstance = Loading.service({
            lock: true,
            text: '加载中',
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)"
        });
    }

    if(method === 'post')
    {
        return new Promise((resolve, reject) => {
            axios.post(BASE_URL+url, params,{
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(data=>{
                if(loading) loadingInstance.close();
                resolve(data.data);

            }).catch(error=>{
                reject(error);
                Message.error('网络不给力');
                if(loading) loadingInstance.close();
            });
        })
    }
    else
    {
        return new Promise((resolve, reject) => {
            axios.get(BASE_URL+url+'?'+formatParams(params)).then(data=>{
                resolve(data.data);
                if(loading) loadingInstance.close();
            }).catch(error=>{
                Message.error('网络不给力');
                if(loading) loadingInstance.close();
                reject(error);
            });
        })
    }
}

// // 响应时间
// axios.defaults.timeout = 5 * 1000
// // 配置cookie
// //axios.defaults.withCredentials = true
// // 配置请求头
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// // 静态资源
// Vue.prototype.$static = ''
//
// // 配置接口地址
// axios.defaults.baseURL = 'http://localhost:3000'
// var loadingInstance
// // POST传参序列化(添加请求拦截器)
// axios.interceptors.request.use(
//     config => {
//         loadingInstance = Loading.service({
//             lock: true,
//             text: '数据加载中，请稍后...',
//             spinner: 'el-icon-loading',
//             background: 'rgba(0, 0, 0, 0.7)'
//         })
//         if (config.method === 'post') {
//             config.data = qs.stringify(config.data)
//         }
//         return config
//     },
//     err => {
//         loadingInstance.close()
//         Message.error('请求错误')
//         return Promise.reject(err)
//     }
// )
// // 返回状态判断(添加响应拦截器)
// axios.interceptors.response.use(
//     res => {
//         if (res.data.code === 200) {
//             loadingInstance.close()
//             return res
//         } else {
//             loadingInstance.close()
//         }
//     },
//     err => {
//         loadingInstance.close()
//         Message.error('请求失败，请稍后再试')
//         return Promise.reject(err)
//     }
// )
// // 发送请求
// export function fetchPost (url, params={}) {
//     return new Promise((resolve, reject) => {
//         axios.post(url, params).then(res => {
//                     resolve(res.data)
//             console.log(res)
//                 }, err => {
//                     reject(err)
//         }).catch(err => {
//                 reject(err)
//             })
//     })
// }
// export function fetchGet (url, params={}) {
//     return new Promise((resolve, reject) => {
//         axios.get(url, {
//                 params: params
//             }).then(res => {
//                 resolve(res.data)
//             }).catch(err => {
//                 reject(err)
//             })
//     })
// }
