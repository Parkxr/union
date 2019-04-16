<template>
    <div class="box">
        1111111111111111111
        <div class="banner">
            <img src="../style/img/tp.png" alt="" class="one">
            <img src="../style/img/tp2.png" alt="" class="two">
            <img src="../style/img/tp3.png" alt="" class="three">
            <img src="../style/img/tp4.png" alt="" class="four">
        </div>
    </div>
</template>
<script>
export default {
    name:"first",
    methods: {
        
    },
    created() {
        window.onload = function () {
            let two=document.querySelector(".two");
            two.style.transform="translateX(450px)";
            let three=document.querySelector(".three");
            three.style.transform="translateX(-675px)";
            let four=document.querySelector(".four");
            four.style.transform="translateX(-460px)";
        };
    },
    mounted() {
         
    },
}
</script>
<style lang="less">
    *{
        margin:0;
        padding:0;
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
            .two{
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
                right: 0px;
                transition:1s; 
            }
            .four{
                width: 150px;
                position: absolute;
                top: 50%;
                right: 0%;
                transition:1s; 
            }
        }
    }
</style>