<template>
    <div class="HYY-vi">
       <div class="banner">
           <img src="@/assets/design/vi/banner.jpg" alt="">
       </div>

       <div class="main">
           <div class="banxinxian"> 
                <div>
                    <h2>VI设计</h2>
                    <p class="xian">-</p>
                </div>

                <ul>
                        <li><img src="@/assets/design/vi/ulpic1.png" alt=""></li>
                        <li class="block">
                            <img class="lipic1" src="@/assets/design/vi/ulpic2.png" alt="">
                            <img class="lipic2" src="@/assets/design/vi/ulpic3.png" alt="">
                            <img class="lipic3" src="@/assets/design/vi/ulpic4.png" alt="">        
                        </li>
                       
                </ul>
                <div class="footer">
                        <img class="footerpic1" src="@/assets/design/vi/footerpic1.png" alt="">
                        <img class="footerpic2" src="@/assets/design/vi/footerpic2.png" alt="">
                        <img class="footerpic3" src="@/assets/design/vi/footerpic3.png" alt=""> 
                </div>
            </div>
       </div>

    </div>
</template>

<script>
    export default {
        name:"vi"
    }
</script>

<style lang="less" scoped>
    *{
        margin:0px;
        padding:0px;
    }
    .HYY-vi{
        li{
        list-style: none;
    }
    .banner{
        height:960px;
        img{
            width:100%;
            display: block;
            height:100%;
        }
        overflow: hidden;
    }
    .main{
        height:1896px;
        background:#efe5e4;
        .banxinxian{
            width:1486px;
            margin:0 auto;
           
            h2{

            padding-top:86px;
            color:#161f15;
           
            font-size:59px;
            width:357px;
            font-weight:normal;
            border-bottom: 1px solid #1e4a17;
            
        };
        .xian{
            width: 447px;
            border-bottom: 1px solid #55695d;
            margin-left: 40px;
            color:white;
        }
        ul{
            margin-top:16px;
             height:991px;
            
            position: relative;
            li{
                float: left;
            }
            .block{
                
                img{
                    display:block;
                   
                };
                .lipic1{
                     position: absolute;
                     right:0;
                     top:-126px;
                };
                 .lipic2{
                     position: absolute;
                     right:268px;
                     top:216px;
                };
                  .lipic3{
                     position: absolute;
                     right:0px;
                     top:442px;
                };
            }
        };
        .footer{
            height:638px;
            clear: both;
            position: relative;
            .footerpic3{
               position:absolute;
               right:0;
            };
             .footerpic2{
               position:absolute;
               left:446px;
               bottom:20px;
            };
             .footerpic1{
               position:absolute;
               left:0;
               bottom:20px;
            }
        }
    }
}
    }
</style>
