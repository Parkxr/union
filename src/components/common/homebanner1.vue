<template>
  <div class="swiper-container swiper2">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div>
          <img src="@/assets/home/cases1.png">
        </div>
        <div>
          <img src="@/assets/home/cases2.png">
        </div>
        <div>
          <img src="@/assets/home/cases3.png">
        </div>
        <div>
          <img src="@/assets/home/cases4.png">
        </div>
      </div>
      <div class="swiper-slide">
        <div>
          <img src="@/assets/home/cases5.jpg">
        </div>
        <div>
          <img src="@/assets/home/cases6.jpg">
        </div>
        <div>
          <img src="@/assets/home/cases7.jpg">
        </div>
        <div>
          <img src="@/assets/home/cases8.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  created() {
    this.$nextTick(() => {
      this.getbanner();
    });
  },
  methods: {
    getbanner() {
      var mySwiper = new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
        autoplay: 1000,
        speed: 1000,
        autoplay: {
          disableOnInteraction: false
        }
      });
    }
  }
};
</script>

<style lang="less">
@import "../../../node_modules/swiper/dist/css/swiper.min.css";
.swiper2 {
  width: 1300px;
  height: 452px;
  margin: 0 auto;

  .swiper-slide {
    width: 1300px;
    display: flex;
    height: 452px;
    justify-content: space-between;
    align-items:center;
    flex-direction: row;
    flex-wrap: wrap;

  }
}
</style>


