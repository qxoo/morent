<template>
	<Header />
	<router-view />
</template>
<script>
	import Header from "@/components/header.vue"
	export default {
		components: {
			Header,
		},
	}
</script>
<style lang="scss">
	@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");
	body {
		background: #f6f7f9;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.hero_BG1{
		background: url(@/assets/img/heroBG.png) center/100% no-repeat;
		object-fit: cover;
	}
	.hero_BG2{
		background: url(@/assets/img/heroBG2.png) center/100% no-repeat;
		object-fit: cover;
	}
</style>
