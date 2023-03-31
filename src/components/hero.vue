<template>
	<div class="hero">
		<div class="hero_title">
			<p class="hero_title_h1">The Best Platform for Car Rental</p>
			<p class="hero_title_h2">
				Ease of doing a car rental safely and reliably. Of course at a low
				price.
			</p>
			<button
				class="hero_title_btn"
				@click="console.log()
					// this.$router.push({
					// 	path: `/product/${}`,
					// 	name: `${}`,
					// })
				"
			>
				Rental Car
			</button>
		</div>
		<div class="hero_image">
			<img src="@/assets/img/image7.png" alt="" class="hero_imago_logo" />
		</div>
	</div>
</template>

<script>
	export default {}
</script>

<style lang="scss" scoped>
	.hero {
		position: relative;
		padding: 24px;
		background: #54a6ff;
		border-radius: 10px;
		width: 640px;
		height: 360px;
		&_title {
			display: flex;
			flex-direction: column;
			font-family: "Plus Jakarta Sans", sans-serif;
			font-style: normal;
			line-height: 150%;
			letter-spacing: -0.03em;
			color: #ffffff;
			display: flex;
			flex-direction: column;
			padding: 0px;
			gap: 20px;
			width: 284px;
			height: 224px;
			&_h1 {
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
				background: #3563e9;
				border-radius: 4px;
				width: 120px;
				height: 44px;
				border: none;
			}
		}
		&_image {
			display: flex;
			justify-self: center;
		}
	}
</style>
