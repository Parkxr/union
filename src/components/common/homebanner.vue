<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="@/assets/home/homebanner.png" width="100%"></div>
      <div class="swiper-slide"><img src="@/assets/home/homebanner2.jpg" width="100%"></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
    
  created() {
      this.$nextTick(() => {
						this.getbanner()
					})
  },
  methods: {
    getbanner() {
      var mySwiper = new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
       pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
        autoplay:1000,
        speed:1000,
        autoplay: {
          disableOnInteraction: false
        }
      });
    }
  }
};
</script>

<style lang="less">
@import '../../../node_modules/swiper/dist/css/swiper.min.css';
</style>


