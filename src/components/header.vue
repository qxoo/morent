<template>
	<div class="header">
		<div class="header_logo"></div>
		<div class="header_search"></div>
		<nav class="header_buttons">
			<button class="header_buttons__btn">
				<img class="header_buttons__btn__icon" :src="btnIcon.icon" alt="" />
			</button>
		</nav>
	</div>
</template>

<script>
	export default {
		name: "Header",
		props: {
			btnIcon: {
				type: Array,
				default: () => [{ icon: "" }],
			},
			btnLink: {
				type: Array,
				default: () => [{ link: "/test" }],
			},
		},
	}
</script>

<style lang="scss" scoped></style>
