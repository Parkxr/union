<template>
<div class="HYY-body">
    <div class="banner">
        <img src="@/assets/design/matter/banner.jpg" alt="加载中..........">
    </div>
    <div class="overall">
        <div class="wysj">
            <h2>网页设计</h2>
            <p class="xian">-</p>
            
            <p class="yi">一</p>
            <div class="HYY-div">
                <div class="div1 diva"></div>
                <div class="div1 divb"></div>
                <div class="div1 divc" ></div>
                <div class="div1 divd"></div>
            </div>
            <!-- <img src="@/assets/design/matter/wysj1.jpg" alt="">
            <img src="@/assets/design/matter/wysj2.jpg" alt="">
            <img src="@/assets/design/matter/wysj3.jpg" alt="">
            <img src="@/assets/design/matter/wysj4.jpg" alt="" class="lastpic"> -->
        </div>
        <div class="wysjj">
            <p>一</p>
            <div>
                <img src="@/assets/design/matter/wysjj1.png" alt="">
                
            </div>
            <div>
                <p class="font1">HIGH  QUALITY</p>
                <p>HIGH QUALITY</p>
                <p class="font3">HIGH  QUALITY</p>
            </div>
            <div class="wysjjpic">  
                <img class="wysjjpic2" src="@/assets/design/matter/wysjj2.png" alt="">
                <img class="wysjjpic3" src="@/assets/design/matter/wysjj3.png" alt="">
                <img class="wysjjpic4" src="@/assets/design/matter/wysjj4.png" alt="">
            </div>
        </div>

     </div>  
    <div class="waiwei">
        <div class="neibu">
            <div class="neibupic">
                <img class="neibupic1" src="@/assets/design/matter/wy.jpg" alt=""/>
                <img class="neibupic2" src="@/assets/design/matter/wy2.jpg" alt=""/>
                <img class="neibupic3" src="@/assets/design/matter/wy3.jpg" alt=""/>
            </div>
            <span>一</span>
            <!-- <div>
               
            </div> -->
         </div>
     </div> 
     <div class="footer">
         <p>一</p>
         <img src="@/assets/design/matter/footer.png" alt=""/>
     </div>
</div>
</template>

<script>
    import animate from 'animate.css'
    export default {
  
    }
</script>

<style lang="less" scoped>
    *{
        margin:0;
        padding:0;
    };
    .HYY-body{
         .banner{
         img{
              width:100%;
              display:block;
              height:100%;
         }
         height:800px;
         overflow: hidden;
    }
   .overall{
       
        width:1200px;
        margin: 0 auto;
       
        .wysj{
            margin-top:190px;

             height:600px;
            
        h2{

           padding-left:90px; 
            color:#161f15;
            text-align: left;
            font-size:59px;
            width:357px;
            font-weight:normal;
            border-bottom: 1px solid darkturquoise;
            animation: twinkling 1s infinite ease-in-out 
        };
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
    
        .yi{
            height:60px;
            line-height: 60px;
            text-align: right;
            font-size:46px;
            font-weight: bold;
            padding-right:16px;
            color:#1a5014;
            
        };
        .xian{
            width: 447px;
            border-bottom: 1px solid yellow;
            margin-left: 40px;
            color:white;
        }
      
        .HYY-div{
              display: flex;
              margin-top:50px;
            .div1{
            flex:1;
            float:left;
            display:block;
            margin-right:20px;
            background: url(../../assets/design/matter/wysj2.jpg) no-repeat;
            width:280px;
            height:280px;
            border-radius:50%;
            animation:run 5s linear 2s infinite; 
        }
        .diva{
            background: url(../../assets/design/matter/wysj1.jpg) no-repeat;
        }
        .divb{
            background: url(../../assets/design/matter/wysj2.jpg) no-repeat;
        }
        .divc{
            background: url(../../assets/design/matter/wysj3.jpg) no-repeat;
        }
        .divd{
            background: url(../../assets/design/matter/wysj4.jpg) no-repeat;
           
        }
         .div1:hover{     
            animation-play-state:paused;     
        }
         @keyframes run{     
            from{     
                -webkit-transform:rotate(360deg);     
            }     
            to{     
                -webkit-transform:rotate(0deg);     
            }     
        }
        }
    }
    .wysjj{
        
        height:800px;
        //background:papayawhip;
        p{
          
            text-align: left;
            font-size:46px;
            font-weight: bold;
            color:#1a5014;
        }
        img{
            padding-top:16px;
            float: left;
        }
        .wysjjpic3{
            padding-top:162px;
        }
         .wysjjpic4{
            padding-top:333px;
            padding-left:14px;
        }
        div{
            p{
                width:250px;
                line-height:30px;

                //background:red;
                font-size:16px;
                float:left;
                color:#333;
                border-bottom:1px solid #999;
               
            }
            .font1{
                border:none;
            }
            .font3{
                margin-left:14px;
            }
        }
       
        }
    
   }
   .waiwei{
       width:1270px;
       margin:0 auto;
       //background:pink;
       height:950PX;
       .neibu{
           width:1270px;
            
           div{
               img{
                   
                   float:left;

               }
               .neibupic2{
                   padding-left:50px;
               }
                .neibupic3{
                    padding-left:50px;
                    padding-top:50px;
                }
           }
           span{
               font-size:46px;
               font-weight: bold;
               color:#1a5014;
           }
       }
   }
   .footer{
       clear:both;
       width:100%;
       height:946px;
       //background:powderblue;
       p{
           margin-left:370px;
           text-align:left;
           font-size:46px;
            font-weight: bold;
            color:#1a5014;
       }
       img{width:100%;}
   }
    }
</style>
