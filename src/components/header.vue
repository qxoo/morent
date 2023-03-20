<template>
	<div class="header">
		<p class="header_logo">MORENT</p>
		<div class="header_search"><input type="text" name="" id="" /></div>
		<nav class="header_buttons">
			<button
				v-for="(content, idx) in btnContent"
				:key="idx"
				class="header_buttons__btn"
				@click="
					this.$router.push({
						path: `${content.link}`,
						name: `${content.link}`,
					})
				"
			>
				<img
					class="header_buttons__btn__icon"
					:src="content.icon"
					alt=""
				/>
			</button>
		</nav>
	</div>
</template>

<script>
	export default {
		name: "Header",
		props: {
			btnContent: {
				type: Array,
				default: () => [{ icon: "", link: "/test" }],
			},
		},
	}
</script>

<style lang="scss" scoped>
	.header {
		width: 100%;
		height: 128px;
		border: 1px solid rgba(195, 212, 233, 0.4);

		&_logo {
			font-family: "Plus Jakarta Sans";
			font-style: normal;
			font-weight: 700;
			font-size: 32px;
			line-height: 150%;
			letter-spacing: -0.03em;
			color: #3563e9;
		}

		&_search {
		}

		&_buttons {
			display: flex;
			flex-direction: row;
			align-items: flex-start;
			padding: 0px;
			gap: 20px;
			&__btn {
				&__icon {
				}
			}
		}
	}
</style>
