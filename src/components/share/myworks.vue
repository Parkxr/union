<template>
	<div>
		<main>
			<div class="banner">
				<div></div>
				<img src="@/assets/share/banner.png" alt="">
				<div></div>
				<ul class="guanzhu">
					<li><img src="@/assets/share/touxiang7.png" alt=""></li>
					<li>春风十里</li>
					<li><button>关注</button></li>
				</ul>
			</div>
			<div class="works">
				所有作品
			</div>
			<!-- 作品 -->
			<article>
				<ul>
					<li><img src="@/assets/share/zuopin1.jpg" alt=""></li>
					<li class="two"><span>是时候做出改变了</span><span>插画配图</span></li>
					<li class="thr">
						<span><img src="@/assets/share/thr-watch.jpg" alt="">&nbsp;2120</span>
						<span><img src="@/assets/share/thr-pinlun.jpg" alt="">&nbsp;22</span>
						<span><img src="@/assets/share/thr-cang.jpg" alt="">&nbsp;34</span>
					</li>
				</ul>
				<ul>
					<li><img src="@/assets/share/zuopin2.jpg" alt=""></li>
					<li class="two"><span>是时候做出改变了</span><span>插画配图</span></li>
					<li class="thr">
						<span><img src="@/assets/share/thr-watch.jpg" alt="">&nbsp;2120</span>
						<span><img src="@/assets/share/thr-pinlun.jpg" alt="">&nbsp;22</span>
						<span><img src="@/assets/share/thr-cang.jpg" alt="">&nbsp;34</span>
					</li>
				</ul>
				<ul>
					<li><img src="@/assets/share/zuopin3.jpg" alt=""></li>
					<li class="two"><span>是时候做出改变了</span><span>插画配图</span></li>
					<li class="thr">
						<span><img src="@/assets/share/thr-watch.jpg" alt="">&nbsp;2120</span>
						<span><img src="@/assets/share/thr-pinlun.jpg" alt="">&nbsp;22</span>
						<span><img src="@/assets/share/thr-cang.jpg" alt="">&nbsp;34</span>
					</li>
				</ul>
				<ul>
					<li><img src="@/assets/share/zuopin4.jpg" alt=""></li>
					<li class="two"><span>是时候做出改变了</span><span>插画配图</span></li>
					<li class="thr">
						<span><img src="@/assets/share/thr-watch.jpg" alt="">&nbsp;2120</span>
						<span><img src="@/assets/share/thr-pinlun.jpg" alt="">&nbsp;22</span>
						<span><img src="@/assets/share/thr-cang.jpg" alt="">&nbsp;34</span>
					</li>
				</ul>
				<ul>
					<li><img src="@/assets/share/zuopin4.jpg" alt=""></li>
					<li class="two"><span>是时候做出改变了</span><span>插画配图</span></li>
					<li class="thr">
						<span><img src="@/assets/share/thr-watch.jpg" alt="">&nbsp;2120</span>
						<span><img src="@/assets/share/thr-pinlun.jpg" alt="">&nbsp;22</span>
						<span><img src="@/assets/share/thr-cang.jpg" alt="">&nbsp;34</span>
					</li>
				</ul>
				<div></div>
			</article>
			<div class="liuyan">
				留言
			</div>
		</main>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="less">
	// *{padding:0;margin:0;}
	// div,dl,dt,dd,form,h1,h2,h3,h4,h5,h6,img,ol,ul,li,table,th,td,p,span,a{border:0;}
	// img,input{border:none;vertical-align:middle;}
	// body{font-family:"微软雅黑";font-size:12px;text-align:center;background:#FFF;color:#333;width:100%;}
	// html{overflow-y:scroll;}
	// ul,ol{list-style-type:none;}
	// th,td,input{font-size:12px;}
	// h3{font-size:14px;}
	// button{border:none;cursor:pointer;font-size:12px;background-color:transparent;}
	// select{border-width:1px;_zoom:1;border-style:solid;padding-top:2px;font-size:12px;}
	// .clear{clear:both;font-size:1px;height:0;visibility:hidden;line-height:0;}
	// .clearfix:after{content:"";display:block;clear:both;}
	// .clearfix{zoom:1;}
	// a:link,a:visited{text-decoration:none;color:#333;}
	// a:hover,a:active{text-decoration:underline;color:#f60;}
	// i{font-style:normal;}
	main{
		width:100%;
		background: #f0e4e6;
		height:2000px;
		header{
			width:100%;
			height:100px;
			background: #87a75c;
		}
		.banner{
			position:relative;
			width:900px;
			height:400px;
			margin:0 auto;
			div{
				width:900px;
				height:50px;
			}
			img{
				width:900px;
				height:300px;
			}
			ul{
				position:absolute;
				left:400px;
				top:10px;
			}
			ul li:nth-child(1){
				width:150px;
				height:150px;
				border:1px solid #b3b3b3;
				border-radius: 50%;
			}
			ul li:nth-child(1) img{
				width:150px;
				height:150px;
				border-radius: 50%;
			}
			ul li:nth-child(2){
				font-size: 25px;
				font-weight: bold;
				margin-top:20px;
			}
			ul li:nth-child(3) button{
				font-size: 22px;
				font-weight: bold;
				color:white;
				margin-top:20px;
				width:130px;
				height:50px;
				background: #87a75c;
				border-radius: 10px;
			}
		}
		.works{
			padding-left:10px;
			width:890px;
			height:45px;
			line-height: 45px;
			background: #87a75c;
			text-align: left;
			color:white;
			font-size:18px;
			font-weight: bold;
			margin:0 auto;
		}
		article{
			margin:0 auto;
			width:900px;
			div{
				clear:both;
			}
			ul{
				float:left;
				width:180px;
				height:250px;
				margin:0 20px 50px 0;
				background: white;
				padding:15px;
				img{
					width:180px;
					height:140px;
				}
				.two{
					height:70px;
					line-height: 70px;
				}
				.two span:nth-child(1){
					float:left;
				}
				.two span:nth-child(2){
					float:right;
					color:#b5b3b4;
				}
				.thr{
					img{
						width:12px;
						height:10px;
					}
					span:nth-child(1){
						margin-left:55px;
					}
					span{
						margin:0 5px;
					}
				}
			}
			ul:nth-child(4n){
				margin:0;
			}
		}
	.liuyan{
		padding-left:10px;
		width:890px;
		height:45px;
		line-height: 45px;
		background: #87a75c;
		text-align: left;
		color:white;
		font-size:18px;
		font-weight: bold;
		margin:0 auto;
	}
	}
</style>
