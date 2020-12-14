
import axios from "axios"
import Vue from "vue"
axios.defaults.withCredentials=true;

export default () => {
    const axiosInstance=axios.create({
        baseURL: `/api/v2` //vue.config deki target url nin sonuna geliyor bu öyle düşün oradaki api sabit
    });
    Vue.use(axiosInstance);
    return axiosInstance;
}