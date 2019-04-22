<template>
    <div class="box">
        <div class="banner">
            <img src="@/assets/design/tp.png" alt=""  ref="one" class="one">
            <img src="@/assets/design/tp2.png" alt="" ref="two"  class="two">
            <img src="@/assets/design/tp3.png" alt="" ref="three"  class="three">
            <img src="@/assets/design/tp4.png" alt="" ref="four"  class="four">
        </div>
        <p>创意酷专注于做更好的设计</p>
        <span>提供行业内的基本服务，网页设计、电商专题、项目外包、平面VI设计...</span>
        <div class="list">
            <ul>
                <li>
                    <p>网页设计制作</p>
                    <span>WEBDEISGN</span>
                    <img src="@/assets/design/tp5.png" alt="">
                </li>
                <li>
                    <p>电商设计</p>
                    <span>ELECTRICITY</span>
                    <img src="@/assets/design/tp6.png" alt="">
                </li>
                <li>
                    <p>项目外包</p>
                    <span>PROJECT</span>
                    <img src="@/assets/design/tp7.png" alt="">
                </li>
                <li>
                    <p>平面VI设计</p>
                    <span>PLANE VI</span>
                    <img src="@/assets/design/tp8.png" alt="">
                </li>
            </ul>
        </div>
        <div class="main">
            <div class="left">
                <img src="@/assets/design/tp9.png" alt="">
                <p>自创立以来，伴随改革开放，历经市场洗礼，家居和中国家具产业的发展已经不可同日而语，但是这个愿景始终未变，而且日益增强。追，精益制造，设计时尚，品牌翘楚，是我们各项工作的出发点</p>
            </div>
            <div class="right">
                <p>网页设计</p>
                <b></b><b></b>
                <img src="@/assets/design/tp10.png" alt="">
            </div>
        </div>
        <div class="main2">
            <div class="left">
                <p>电商设计</p>
                <b></b><b></b>
                <img src="@/assets/design/tp11.png" alt="">
                <span>自创立以来，伴随改革开放，历经市场洗礼，家居和中国家具产业的发展已经不可同日而语，但是这个愿景始终未变，而且日益增强。追，精益制造，设计时尚，品牌翘楚，是我们各项工作的出发点</span>
            </div>
            <img src="@/assets/design/tp12.png" alt="" class="right">
        </div>
        <div class="main2">
            <div class="left">
                <p>UI设计</p>
                <b></b><b></b>
                <img src="@/assets/design/tp13.png" alt="">
                <span>自创立以来，伴随改革开放，历经市场洗礼，家居和中国家具产业的发展已经不可同日而语，但是这个愿景始终未变，而且日益增强。追，精益制造，设计时尚，品牌翘楚，是我们各项工作的出发点</span>
            </div>
            <img src="@/assets/design/tp14.png" alt="" class="right">
        </div>
        <div class="main">
            <div class="left">
                <img src="@/assets/design/tp15.png" alt="">
                <span>企业品牌宣传设计</span>
                <p>自创意酷成立以来，历经市场洗礼，经过近20年的发展如今的发展已经不可同日而语，但是这个愿景始终未变，而且日益增强。追，精益制造，设计时尚，品牌翘楚，是我们各项工作的出发点</p>
            </div>
            <div class="right">
                <p>VI手册</p>
                <b></b><b></b>
                <img src="@/assets/design/tp16.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"first",
    methods: {
         
    },
    mounted() {
            setTimeout(() => {
            this.$refs["two"].style.transform="translateX(155%)";
            console.log(this.$refs["two"])
             this.$refs["three"].style.transform="translateX(-1450%)";
             this.$refs["four"].style.transform="translateX(-350%)"; 
            }, 0);  
        }  
}
</script>
<style lang="less">
    li{
        list-style: none;
    }
    body{
        background: #cccccc;
    }
    .box{
        width: 100%;
        height: 100%;
        .banner{
            position: relative;
            .one{
                display: block;
                width: 100%;
                height:100%;
            }
            .two
            {
                width: 300px;
                position: absolute;
                top: 15%;
                left: 0%;
                transition:1s;             
            }
            .three{
                width: 45px;
                position: absolute;
                top:20%;
                right: 100px;
                transition:1s; 
            }
            .four{
                width: 150px;
                position: absolute;
                top: 67%;
                right: 0%;
                transition:1s; 
            }
        }
        p{
            color: #194c11;
            font-size: 54px;
            text-align: center;
            margin-top: 50px;
        }
        span{
            display: block;
            color: #194c11;
            font-size: 18px;
            text-align: center;
            margin-top: 30px;
        }
        .list{
            width: 1220px;
            height: 485px;
            border: 40px solid #87a75c;
            margin:40px auto 0;
            ul{
                li:hover{
                    opacity: .8;
                }
                li:hover p{
                    color:black;
                }
                li:hover span{
                    color:white;
                }
                li:hover img{
                    transform:rotate(360deg);
                }
                li{
                    float: left;
                    margin: 85px 25px;
                    width: 253px;
                    height: 320px;
                    background: #87a75c;
                    border-radius: 10px;
                    p{
                        font-size: 22px;
                        color:white;
                        margin-top: 93px;
                    }
                    span{
                        font-size: 14px;
                        color:#cccccc;
                        margin-top: 20px;
                    }
                    img{
                        display: block;
                        margin: 0 auto;
                        margin-top: 24px;
                        transition: .5s;
                    }
                }
            }
        }
        .main{
            width: 1300px;
            height: 920px;
            margin: 60px auto 0;
            background: white;
            .left{
                float: left;
                width: 670px;
                height: 100%;
                img{
                    margin-top: 30px;
                }
                p{
                    font-size: 15px;
                    margin-left: 100px;
                    text-align:left;
                    text-indent: 30px;
                    line-height: 35px;
                }
                span{
                    display: block;
                    font-size: 20px;
                    text-align: left;
                    margin-left: 175px;
                }
            }
            .right{
                float: left;
                width: 630px;
                height: 100%;
                p{
                    font-size: 35px;
                    color: #194c14;
                    margin: 200px 0 0 220px;
                    text-align: left;
                }
                img{
                    display: block;
                    margin: 35px 0 0 140px;
                }
                b{
                    width: 450px;
                    height: 13px;
                    display: block;
                    border-bottom: 1px solid black;
                    margin-left: 140px;
                }
                b:nth-child(3){
                    margin-left:0px
                }
            }
        }
        .main2{
            width: 1300px;
            height: 920px;
            margin: 60px auto 0;
            background: white;
            .left{
                width: 720px;
                height: 100%;
                float: left;
                p{
                    font-size: 35px;
                    color: #194c14;
                    margin: 75px 0 0 195px;
                    text-align: left;
                }
                b{
                    width: 450px;
                    height: 13px;
                    display: block;
                    border-bottom: 1px solid black;
                    margin-left: 140px;
                }
                b:nth-child(3){
                    margin-left:0px
                }
                img{
                    margin: 25px 0 0 25px;
                }
                span{
                    font-size: 15px;
                    margin: 90px 0 0 100px;
                    text-align:left;
                    text-indent: 30px;
                    line-height: 35px;
                }
            }
            .right{
                float: left;
                margin-top: 400px;
            }
        }
    }
</style>