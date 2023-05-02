<template>
	<div class="header">
		<p
			class="header_logo"
			@click="
				this.$router.push({
					path: '/',
					name: 'App',
				})
			"
		>
			MORENT
		</p>
		<div class="header_search">
			<img
				src="@/assets/svg/search-normal.svg"
				alt=""
				class="header_search_logo logo"
			/>
			<input
				v-model="search"
				class="header_search_input"
				type="text"
				name=""
				id=""
				placeholder="Search something here"
			/>
			<img
				src="@/assets/svg/filter.svg"
				alt=""
				class="header_search_filter filter"
			/>
		</div>
		<button
			@click="
				this.$router.push({
					path: `test`,
					name: `test`,
				})
			"
		>
			to test
		</button>
		<nav class="header_buttons">
			<button
				v-for="(content, idx) in btnContent"
				:key="idx"
				class="header_buttons__btn"
				@click="
					this.$router.push({
						path: `${content.link}`,
						name: `${content.link}` - '/',
					})
				"
			>
				<img
					class="header_buttons__btn__icon"
					:src="require(`../assets/${content.icon}`)"
					alt="icon not found"
				/>
			</button>
		</nav>
	</div>
</template>

<script>
	import { headerContent } from "@/constants/constants.js"
	import { defineAsyncComponent } from "vue"
	export default {
		name: "Header",
		data() {
			return {
				search: "",
				iconPath: "svg/like.svg",
				btnContent: headerContent,
			}
		},
		methods: {
			requireImage(link) {
				return defineAsyncComponent(() => import(`@/assets/${link}.svg`))
			},
		},
		computed: {
			getPath() {
				return require(`@/assets/${this.iconPath}`)
			},
		},
	}
</script>

<style lang="scss" scoped>
	.header {
		height: 128px;
		border: 1px solid rgba(195, 212, 233, 0.4);
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: 0 30px;
		gap: 4.4%;
		background: white;
		&_logo {
			font-family: "Plus Jakarta Sans", sans-serif;
			font-style: normal;
			font-weight: 700;
			font-size: 32px;
			line-height: 150%;
			letter-spacing: -0.03em;
			color: #3563e9;
			margin: 0 30px;
			cursor: pointer;
		}
		&_search {
			display: flex;
			align-content: center;
			gap: 20px;
			padding: 10px;
			background: #ffffff;
			border: 1px solid rgba(195, 212, 233, 0.4);
			border-radius: 70px;
			width: 87%;
			min-width: 400px;
			:focus {
				border: none;
				outline: 0;
				box-shadow: none;
				border-color: inherit;
			}
			&_input {
				width: 100%;
				border: none;
				padding: 2px;
				:focus {
					border: none;
					outline: 0;
					box-shadow: none;
					border-color: inherit;
				}
			}
		}

		&_buttons {
			display: flex;
			flex-direction: row;
			align-items: center;
			width: 100%;
			justify-content: flex-end;
			padding: 0px;
			gap: 20px;
			:last-child {
				img {
					width: 48px;
					border-radius: 50%;
				}
			}
			&__btn {
				width: 50px;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 50px;
				border-radius: 50%;
				opacity: 0.8;
				border: 1px solid rgba(195, 212, 233, 0.4);
				border-radius: 90px;
				background: white;
				object-fit: cover;
				transition: all 0.4s ease;
				&:hover {
					border: 1px solid rgb(97, 97, 212);
				}
				&__icon {
					object-fit: cover;
					width: 20px;
				}
			}
		}
	}
</style>
