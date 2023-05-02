<template>
	<div :class="heroBGPic">
		<div class="hero_title">
			<p class="hero_title_h1">The Best Platform for Car Rental</p>
			<p class="hero_title_h2">
				Ease of doing a car rental safely and reliably. Of course at a low
				price.
			</p>
			<button :class="heroBtnBG" >Rental Car</button>
		</div>
		<div class="hero_image">
			<img :src="heroCarPic" alt="nothing here" class="hero_imago_logo" />
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			heroCarPic: {
				type: String,
				default: "@/assets/img/image7.png",
				required: 1,
			},
			heroBGPic: {
				type: String,
				default: "hero hero_BG1",
				required: 1,
			},
			heroBtnBG: {
				type: String,
				default: "pink",
			},
		},
	}
</script>

<style lang="scss" scoped>
	.hero {
		position: relative;
		padding: 0 24px 24px;
		// background: #54a6ff;
		border-radius: 10px;
		width: 640px;
		min-width: 600px;
		height: 360px;
		display: flex;
		flex-direction: column;
		&_title {
			* {
				margin: 0;
			}
			margin-top: 25px;
			display: flex;
			flex-direction: column;
			font-family: "Plus Jakarta Sans", sans-serif;
			font-style: normal;
			color: #ffffff;
			display: flex;
			flex-direction: column;
			padding: 0px;
			gap: 20px;
			width: 350px;
			height: 224px;
			&_h1 {
				font-family: "Plus Jakarta Sans";
				font-style: normal;
				font-weight: 600;
				font-size: 32px;
			}
			&_h2 {
				font-weight: 500;
				font-size: 16px;
			}
			&_btn {
				font-weight: 600;
				font-size: 16px;
				border-radius: 4px;
				width: 140px;
				height: 44px;
				border: none;
				color: white;
				padding: 10px 20px;
				cursor: pointer;
			}
		}
		&_image {
			display: flex;
			justify-self: center;
			width: 406px;
			height: 116px;
			transform: translate(130px, 15px);
			// position: absolute;
		}
	}
	.hero_BG1 {
		background: url(@/assets/img/heroBG.png) center/100% no-repeat;
		object-fit: cover;
	}
	.hero_BG2 {
		background: url(@/assets/img/heroBG2.png) center/100% no-repeat;
		object-fit: cover;
	}
	.btn1 {
		background: #3563e9;
	}
	.btn2 {
		background: #54a6ff;
	}
</style>
