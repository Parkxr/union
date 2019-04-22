<template>
  <div>
    <div id="sharebanner">
      <img src="@/assets/share/dog.gif" alt>
    </div>

    <nav class="sharenav">
      <p>
        <span>热门</span>
        <span>最新</span>
        <span>综合</span>
      </p>

      <div class="neirong">
        <ul v-for="(item,index) in 45" :key="index" @click="$router.push('/myworks')">
          <img src="@/assets/share/nav.png" alt="" class="imgcontent">
          <li class="diyi" >
            <span>大气设计海报</span>
            <span>黄色 | 平面</span>
          </li>
          <li class="dier">
            <div class="sharedata">
              <img src="@/assets/share/icon1.png" alt>
              <span>2120</span>
            </div>
            <div class="sharedata">
              <img src="@/assets/share/icon2.png" alt>
              <span>22</span>
            </div>
            <div class="sharedata">
              <img src="@/assets/share/icon3.png" alt>
              <span>320</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="list">
        <input type="button" value="1">
        <input type="button" value="2">
        <input type="button" value="3">
        <input type="button" value="4">
        <input type="button" value="5">
        <input type="button" value=">">
      </div>
    </nav>
  </div>
</template>
<script>
export default {

};
</script>
<style lang="less" >
#sharebanner {
  width: 100%;
  background: #efae1c;

  img {
    margin-left: 530px;
  }
}
.sharenav {
  width: 100%;
  background: #efe5e4;
  p {
    margin-bottom: 88px;
    text-align: center;
    width: 1300px;
    height: 96px;
    margin: 0 auto;
    background: #ffffff;
    span {
      margin-right: 86px;
      text-align: center;
      line-height: 96px;
    }
  }

  .neirong {
    margin: 0 auto;
    width: 1300px;
    height: 2000px;
    /* background: #efe5e4;*/
    ul {
      background:white;
      list-style:none;
      width: 244px;
      height: 204px;
      border: 1px solid black;
      float: left;
      margin: 12px 0px 12px 13px;
      .imgcontent {
        // margin: 10px 0px 13px 10px;
        display:block;
        width:210px;
        padding-top:10px;
        margin:0 auto;
        
      }
      .diyi {
        margin-left: 15px;
        font-size:14px;
        height:40px;
        line-height:40px;
        span:nth-child(1) {
          padding-right: 30px;
          color: black;
        }
        span{
          display:block;
          float:left;
          text-align:left;
          color:#bbbbbb;
        }
      }
      .dier {
        height:30px;
        margin-left:40px;
        .sharedata{
          float:left;
          margin-left:15px;
          img{
            margin-right:5px;
          }
          span{
            color:#bbbbbb;
          }
        }
      }
    }
  }
  .list { 
    margin-top: 82px;
    text-align: center;
    input {
      border: 1px solid red;
      width: 50px;
      height: 50px;
      margin-left: 10px;
    }
  }
}
</style>