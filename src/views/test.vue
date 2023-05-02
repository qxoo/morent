<template>
	<div class="testPage">
		<hero
			v-for="(heroData, idx) in heroData"
			key="idx"
			:heroCarPic="heroData.heroCar"
			:heroBGPic="heroData.heroBG"
			:heroBtnBG="heroData.heroBtnBG"
		/>
	</div>
</template>

<script>
	import hero from "@/components/hero.vue"
	export default {
		components: { hero },
		data() {
			return {
				heroData: [
					{
						heroCar: "@/assets/img/image7.png",
						heroBG: "hero hero_BG1",
						heroBtnBG: "hero_title_btn btn1",
					},
					{
						heroCar: "@/assets/img/image8.png",
						heroBG: "hero hero_BG2",
						heroBtnBG: "hero_title_btn btn2",
					},
				],
			}
		},
	}
</script>

<style lang="scss" scoped>
	.testPage {
		display: flex;
		gap: 32px;
		padding: 32px 64px;
	}
</style>
