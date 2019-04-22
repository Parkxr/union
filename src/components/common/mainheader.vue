<template>
<div>
   <div class="header">
    <nav>
        <img src="@/assets/logo.jpg" alt="" width="210" height="26">
        <ul>
            <!-- <li>首页</li>
            <li>设计服务</li>
            <li>素材分类</li>
            <li>作品分享</li>
            <li>关于我们</li> -->
            <li><router-link to="/" exact>首页</router-link></li>
            <li><router-link to="/vi">设计服务</router-link></li>
            <li><router-link to="/source">素材分类</router-link></li>
            <li><router-link to="/share">作品分享</router-link></li>
            <li><router-link to="/aboutus">关于我们</router-link></li>
        </ul>
        <div class="searchbtn"></div>
        <div class="homevip"></div>
        <span class= "homelogin">登录</span>
        <span class= "homeregister">注册</span>
    </nav>   
</div>
<router-view></router-view> 
</div>

    
</template>

<script>
export default {
    
}
</script>

<style lang="less">
.header{
    background:#87a75c;
    height:100px;
    nav{
        width:1300px;
        height:100px;
        margin: 0 auto ;
        .homevip{
            float:left;
            width:41px;
            height:38px;
            background:url("../../assets/vip.png");
            margin-right:50px;
            margin-top:33px;
        }
        .searchbtn{
            float:left;
            background:url("../../assets/search.png");
            width:30px;
            height:30px;
            color:white;
            margin-top:38px;
            margin-right:50px;
            margin-left:100px;
        }
        .homelogin{
            float:left;
            width:35px;
            display:block;
            color:white;
            margin-top:38px;
            cursor:pointer;
            margin-right:30px;
        }
        .homeregister{
            float:left;
            width:35px;
            display:block;
            color:white;
            margin-top:38px;
            cursor:pointer;
        }
        img{
            float:left;
            margin-top:35px;
        }
        ul{
            float:left;
            margin-top:35px;
            margin-left:100px;
            width:510px;
            list-style: none;
            li{
                float:left;
                font-size:20px;
                color:white;
                margin-right:30px;
                cursor:pointer;
                a{
                    color:white;
                    text-decoration:none;
                }
                a:hover{
                    font-weight:bold;
                }
                .router-link-active{
                    font-weight:bold;
                }
            }           
        }
    }
}

</style>

