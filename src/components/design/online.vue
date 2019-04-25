<template>
  <div  class="note HYY-note" :style ="note">
      <div class="HYY-banner">
          <img src="@/assets/design/online/banner.jpg" alt="">
      </div>
      
      <div class="HYY-body">
          <div class="HYY-main1">
            <h4>UI设计</h4>
            <p class="xian">一</p>
          </div>
          <div class="HYY-mainpic1">
            <img src="@/assets/design/online/mainpic1.jpg"  alt="" >
          </div>
          <div class="HYY-mainpic2">
            <img src="@/assets/design/online/mainpic2.jpg"   alt="">
          </div>
          <div class="HYY-mainpic3">
            <img src="@/assets/design/online/mainpic3.jpg"   alt="" >
          </div>
      </div>
  <!-- <div>
    <div class="banner">
      <img src="@/assets/design/online/banner.jpg" alt>
    </div>
    <div class="centent">
      <p>电商设计</p>
      <div class="zhezhao">
        <img src="@/assets/design/online/mainpic1.jpg"  alt="" @click="fn">
      </div>
      <div class="zhezhao">
      <img src="@/assets/design/online/mainpic2.jpg"   alt="" @click="fn">
      </div>
      <div class="zhezhao">
      <img src="@/assets/design/online/mainpic3.jpg"   alt="" @click="fn">
      </div>
    </div>
      <!-- <div class="footer"> 
          <img src="../img/online/room.png" alt="">
        </div> -->
   </div> 


</template>

<script>
export default {
  name: "online",
  data(){
      return {
      note: {
      backgroundImage: "url(" + require("@/assets/design/online/beijing.jpg") + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
      marginTop: "5px",
    },
   
  }
   },
   methods:{
    
   }
};
</script>

<style  lang="less" scoped>
  *{
    padding:0;
    margin:0;
  }
  .HYY-note{
    .HYY-banner{
      margin-top:-12px;
      background:red;
      img{
        width:100%;
      }
    }
    .HYY-body{
      //height:1000px;
      //width:1300px;
      margin:0 17%;
      //background:yellow;
      .HYY-main1{
        height:344px;
        position:relative;
        //background:green;
        h4{
          position:absolute;
          top:50%;
          width:446px;
          font-size:60px;
          color:#135014;
          border-bottom:1px solid yellow;
          text-align:center;
          font-weight:normal;
          animation: twinkling 1s infinite ease-in-out 
        }
        .animated{ 
          -webkit-animation-duration: 1s; 
          animation-duration: 1s; 
          -webkit-animation-fill-mode: both; 
          animation-fill-mode: both 
          } 
          @-webkit-keyframes twinkling{ 
          0%{ 
          opacity: 0.5; 
          color:yellow;
          } 
          100%{ 
          opacity: 1; 
          color:darkturquoise;
          } 
          } 
          @keyframes twinkling{ 
          0%{ 
          opacity: 0.5;
          color:darkturquoise;
          } 
          100%{ 
          color:yellow;
          opacity: 1; 
          } 
    }
        .xian{
          width:447px;
          line-height:266px;
          margin-left:40px;
          color:white;
          border-bottom:1px solid darkturquoise;
        }
      }
      .HYY-mainpic1{
       // height:600px;
        background:blue;
        img{
          width:100%;
          opacity:0.7;
        }
        img:hover{
          opacity:1;
        }
      }
      .HYY-mainpic2{
        //height:600px;
        background:red;
        margin-top:96px;
        img{
          width:100%;
          opacity:0.7;
        }
         img:hover{
          opacity:1;
        }
      }
      .HYY-mainpic3{
        //height:600px;
        background:yellow;
        margin-top:96px;
        img{
          width:100%;
          opacity:0.7;
        }
         img:hover{
          opacity:1;
        }
      }
    }
  }
</style>
