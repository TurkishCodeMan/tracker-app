import Vue from "vue"
import VueRouter from "vue-router"
import Search from "../components/Search"
import Profile from "../components/Profile"
Vue.use(VueRouter);
const routes=[
    {path:"/",component:Search,name:"Search"},
    {path:"/profile/:platform/:gamertag",component:Profile,name:"Profile"},
]


 const router =new VueRouter({
     routes,
     mode:"hash"
 })



 export default router;
