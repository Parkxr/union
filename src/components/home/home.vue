<template>
  <div>
    <homebanner></homebanner>
    <div class="welcometo">
      <img src="@/assets/home/welcometo.png">
    </div>
    <div class="designservice">
      <div class="designservicemiddle">
        <p class="designservicecword">设计服务</p>
        <p class="designserviceeword">DESIGN SERVICE</p>
        <div class="homeline_lt"></div>
        <div class="homeline_rt"></div>
      </div>
    </div>
    <div class="homeline_below">
      <div class="homeline_below_middle">
        <div class="homeline_below_div">
          <p class="homeline_below_div_ctitle">网页制作设计</p>
          <p class="homeline_below_div_etitle">WEBDEISGN</p>
          <img src="@/assets/home/homedesign1.png">
        </div>
        <div class="homeline_below_div">
          <p class="homeline_below_div_ctitle">电商专题</p>
          <p class="homeline_below_div_etitle">ELECTRICITY</p>
          <img src="@/assets/home/homedesign2.png">
        </div>
        <div class="homeline_below_div">
          <p class="homeline_below_div_ctitle">UI设计</p>
          <p class="homeline_below_div_etitle">PROJECT</p>
          <img src="@/assets/home/homedesign3.png">
        </div>
        <div class="homeline_below_div" style="border-right:1px solid #e4e4e4">
          <p class="homeline_below_div_ctitle">平面VI设计</p>
          <p class="homeline_below_div_etitle">PLANE VI</p>
          <img src="@/assets/home/homedesign4.png">
        </div>
      </div>
    </div>
    <div class="design_cases">
        <img src="@/assets/home/success.png">
    </div>
    <homebanner1></homebanner1>
    <div>
        <img src="@/assets/home/goodcases.png">
    </div>
    <div class="homedesign">
        <p class="homedesign_ctitle">广告设计</p>
        <p class="homedesign_etitle">ADVERTISING</p>
        <p class="home_more"><span>更多 ></span></p>
        <ul class = "home_pic">
            <li class = "home_pic1"><img src="@/assets/home/add1.jpg"></li>
            <li class = "home_pic2"><img src="@/assets/home/add2.jpg"></li>
            <li class = "home_pic3"><img src="@/assets/home/add3.jpg"></li>
            <li class = "home_pic4"><img src="@/assets/home/add4.jpg"></li>
        </ul>
    </div>
    <div class="homedesign">
        <p class="homedesign_ctitle">UI设计</p>
        <p class="homedesign_etitle">UI DESIGN</p>
        <p class="home_more"><span>更多 ></span></p>
        <ul class = "home_pic">
            <li class = "home_pic1"><img src="@/assets/home/UI1.png"></li>
            <li class = "home_pic2"><img src="@/assets/home/UI2.png"></li>
            <li class = "home_pic3"><img src="@/assets/home/UI3.png"></li>
            <li class = "home_pic4"><img src="@/assets/home/UI4.png"></li>
        </ul>
    </div>
    <div class="homedesign">
        <p class="homedesign_ctitle">网页设计</p>
        <p class="homedesign_etitle">WEB DESIGN</p>
        <p class="home_more"><span>更多 ></span></p>
        <ul class = "home_pic">
            <li class = "home_pic1"><img src="@/assets/home/web1.png"></li>
            <li class = "home_pic2"><img src="@/assets/home/web2.png"></li>
            <li class = "home_pic3"><img src="@/assets/home/web3.png"></li>
            <li class = "home_pic4"><img src="@/assets/home/web4.png"></li>
        </ul>
    </div>
    <div class="homedesign">
        <p class="homedesign_ctitle">插画配图</p>
        <p class="homedesign_etitle">ILLUSTRATION</p>
        <p class="home_more"><span>更多 ></span></p>
        <ul class = "home_pic">
            <li class = "home_pic1"><img src="@/assets/home/cha1.png"></li>
            <li class = "home_pic2"><img src="@/assets/home/cha2.png"></li>
            <li class = "home_pic3"><img src="@/assets/home/cha3.png"></li>
            <li class = "home_pic4"><img src="@/assets/home/cha4.png"></li>
        </ul>
    </div>
    <div class="homecheckmore">
        <button class="homecheckmore_btn" @click="$router.push('/design')">点击查看更多</button>
    </div>
    <div class="homebottom_pic">
        <div><img src="@/assets/home/foot-icon.png"></div>
    </div>
  </div>
</template>

<script>
import homebanner from "@/components/common/homebanner";
import homebanner1 from "@/components/common/homebanner1";
export default {
  components: {
    homebanner,
    homebanner1
  }
};
</script>

<style lang="less">
.welcometo {
  width: 1300px;
  margin: 0 auto;
}
.designservice {
  width: 100%;
  height: 80px;
  .designservicemiddle {
    width: 1300px;
    height: 127px;
    margin: 0 auto;
    position: relative;
    .designservicecword {
      font-weight: bold;
      margin-top: 90px;
      font-size: 40px;
    }
    .designserviceeword {
      font-weight: bold;
      font-size: 20px;
    }
    .homeline_lt {
      width: 400px;
      height: 1px;
      background: #5c5859;
      position: absolute;
      left: 145px;
      top: 80px;
    }
    .homeline_rt {
      width: 400px;
      height: 1px;
      background: #5c5859;
      position: absolute;
      right: 145px;
      top: 80px;
    }
  }
}
.homeline_below {
  margin-top: 70px;
  margin-bottom:50px;
  .homeline_below_middle {
    width: 1005px;
    height:130px;
    margin: 0 auto;
    .homeline_below_div {
      float: left;
      height: 130px;
      width: 250px;
      border-left: 1px solid #e4e4e4;
      .homeline_below_div_ctitle {
        font-size: 24px;
        margin-bottom: 15px;
      }
      .homeline_below_div_etitle {
        font-size: 16px;
        margin-bottom: 15px;
      }
    }
  }
}
.design_cases{
    margin-bottom:50px;
}
.homedesign{
    width:1300px;
    height:650px;
    margin:0 auto;
    .homedesign_ctitle{
        font-size:40px;
        line-height:40px;
        text-align: center;
    }
    .homedesign_etitle{
        text-align: center;
        font-weight:bold;
        font-size:16px;
        margin-top:10px;
        line-height:16px;
    }
    .home_more{
        height:30px;
        span{
            float:right;
            font-size:20px;
            cursor:pointer;
        }
    }
    .home_pic{
        li{
            margin-right:5px;
            float:left;
        }
        .home_pic2{
           //margin-top:4px; 
        }
        .home_pic3{
            //margin-top:11px;
        }
        .home_pic4{
            //margin-top:6px; margin-right:0;
        }
    }
}
.homecheckmore{
    width:1300px;
    margin:0 auto;
    margin-bottom:50px;
    text-align:right;
        .homecheckmore_btn{
            width:200px;
            height:60px;
            border-radius:8px;
            background:#87A75C;
            color:white;
            font-size:20px;
        }
    }
.homebottom_pic{
    width:1300px;
    margin:0 auto;
    margin-bottom:50px;
}
</style>


