<template>
  <div id="wrap">
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <img class="swiper-slide" src="http://image3.xishiqu.cn/upload/apic/920/190/920190308//4662B1D3-5FC7-0A78-8080-2A8DB2D17CB7.jpg" alt="a">
          <img class="swiper-slide" src="http://image4.xishiqu.cn/upload/apic/920/190/920190308//46FD7A75-1FB3-422F-A984-5997578D6441.jpg" alt="a">
          <img class="swiper-slide" src="http://image5.xishiqu.cn/upload/apic/920/190/920190121//8D6AB211-9310-D645-B177-8D6BBD30372C.jpg" alt="a">
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>


    <div class="main">
      
      <h4 class="navTop">
        <a href="#">首页></a>
        <a href="#">素材搜索</a>
      </h4>

      <div class="select">
        <ul>
          <li><a href="#">分类：</a></li>
          <li><a href="#">全部</a></li>
          <li><a href="#">平面设计</a></li>
          <li><a href="#">UI设计</a></li>
          <li><a href="#">网页设计</a></li>
          <li><a href="#">插画配图</a></li>
          <li><a href="#">背景元素</a></li>
          <li><a href="#">卡通手绘</a></li>
          <li><a href="#">装饰模型</a></li>
          <li><a href="#">字体设计</a></li>     
        </ul>
        <ul>
          <li><a href="#">格式：</a></li>
          <li><a href="#">全部</a></li>
          <li><a href="#">PSD</a></li>
          <li><a href="#">AI</a></li>
          <li><a href="#">PNG</a></li>
          <li><a href="#">JPG</a></li>
          <li><a href="#">其他</a></li> 
        </ul>
      </div>

      <div class="listFlex">
        <div>
          <img src="" alt="">
          <ul>
            <li>作品名</li>
            <li>分类</li>
            <li>
              <svg t="1555657131639" class="icon" style="width: 1em; height: 1em;vertical-align: text-top;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3337"><path d="M512 149.333333C121.6 149.333333 0 512 0 512s134.4 362.666667 512 362.666667 512-362.666667 512-362.666667S902.4 149.333333 512 149.333333z m0 533.333334c-93.866667 0-170.666667-76.8-170.666667-170.666667s76.8-170.666667 170.666667-170.666667 170.666667 76.8 170.666667 170.666667-76.8 170.666667-170.666667 170.666667z" fill="#bdbdbd" p-id="3338"></path><path d="M512 512m-128 0a128 128 0 1 0 256 0 128 128 0 1 0-256 0Z" fill="#bdbdbd" p-id="3339"></path></svg>
              2120
            </li>
            <li>
              <svg t="1555657191244" class="icon" style="width: 1em; height: 1em;vertical-align: text-top;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2144"><path d="M700.856275 155.542542c-74.768891 0-144.295384 72.696696-190.046381 127.260405C465.073224 228.226958 395.563104 155.542542 320.754305 155.542542c-134.789892 0-244.443291 105.780185-244.443291 235.799424 0 77.56968 39.277562 131.98808 70.844511 175.712931 91.752704 126.998439 322.464249 285.038872 332.234777 291.701618 9.410324 6.414083 20.424168 9.629311 31.401174 9.629311 11.005658 0 21.998013-3.215228 31.397081-9.629311 9.782807-6.662747 240.514819-164.703179 332.23887-291.701618 31.586392-43.723827 70.873164-98.143251 70.873164-175.712931C945.299567 261.321704 835.645145 155.542542 700.856275 155.542542L700.856275 155.542542zM700.856275 155.542542" p-id="2145" fill="#bdbdbd"></path></svg>
              310
            </li>
          </ul>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ol class="page">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>...</li>
        <li>></li>
      </ol>
    </div>
  </div>

</template>

<script>
export default {

  mounted() {
    var mySwiper = new Swiper ('.swiper-container', {
      loop: true,// 循环模式选项
      
   
      pagination: {
        el: '.swiper-pagination',
      }

    }) 

    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #wrap{
    background: #efe5e4;
  }

  .swiper-container {
    width: 100%;
    height: 26.6%;
  }

  .banner{
    width: 100%;
    background: c9c7c8;
  }

  .banner .swiper-container{
    width: 1920px;
    height: 553px;
    margin: 0 auto;
  }

  .banner .swiper-container img{
    width: 100%;
    height: 100%;
  }

  .main{
    width: 1300px;
    margin: 0 auto;
    padding-bottom: 500px;
  }

  /* ----------------------------------------------------navTop ---------------------------------------------*/
  /* ----------------------------------------------------navTop ---------------------------------------------*/
  /* ----------------------------------------------------navTop ---------------------------------------------*/

  .main .navTop{
    font-size: 16px;
    padding-left: 36px; 
    margin: 14px 0;
  }

  .main .navTop a{
    color: #9b999a;
    font-weight: normal;
  }


  /* ----------------------------------------------------select ---------------------------------------------*/
  /* ----------------------------------------------------select ---------------------------------------------*/
  /* ----------------------------------------------------select ---------------------------------------------*/


  .main .select{
    height: 170px;
    background: #d4d2d3;
  }

   .main .select ul{
    background: #d4d2d3;  
    overflow: hidden;
  } 

  .main .select ul:first-child{
    height: 100px;
    line-height: 100px; 
    border-bottom: 1px solid #c9c7c8; 
  }
  
  .main .select ul:last-child{
    height: 70px;
    line-height: 70px;  
  }

   .main .select ul li{
    float: left;
    padding: 0 10px;
    background: #d4d2d3;  
  } 

  .main .select ul li a{
    color: #6c6a6b;
  } 

   .main .select ul li:first-child{
    font-weight: bold;
    padding-left: 48px;  
  } 

   .main .select ul li:first-child a{
    color: #4c4849;
  } 

  /* ----------------------------------------------------listFlex ---------------------------------------------*/
  /* ----------------------------------------------------listFlex ---------------------------------------------*/
  /* ----------------------------------------------------listFlex ---------------------------------------------*/
  .main .listFlex{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background: #efe5e4;
  } 

  .main .listFlex div{
    width: 19%;
    height: 200px;
    margin-top: 20px;
    background: #fff;
    text-align: center;
  } 

  .main .listFlex div img{
    width: 224px;
    height: 142px;
    display: block;
    background: #f12;
    margin: 10px;
  } 

  .main .listFlex div ul{
    display: flex;
  } 

  .main .listFlex div ul li{
    width: 25%;
    justify-content: space-around;
  } 

  /* ----------------------------------------------------page ---------------------------------------------*/
  /* ----------------------------------------------------page ---------------------------------------------*/
  /* ----------------------------------------------------page ---------------------------------------------*/
  .main .page{
    float: right;
    margin-top: 80px;
  } 

  .main .page li{
    float: left;
    width: 38px;
    height: 38px;
    text-align: center;
    line-height: 38px;
    border-radius: 4px;
    background: #fff;
    margin-right: 6px;
  } 


  .main .page li:hover{
    background: #000;
    color: #fff;
  } 

</style>
