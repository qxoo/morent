import AppVue from "@/App.vue"
import test from "@/views/test.vue"
import { createRouter, createWebHistory } from "vue-router"
import liked from "@/views/liked.vue"
import profile from "@/views/profile.vue"
import settings from "@/views/settings.vue"
import notifications from "@/views/notifications.vue"
import product from "@/views/product.vue"
const routes = [
	{
		path: "/",
		name: "App",
		// component: AppVue,
	},
	{
		path: "/test",
		name: "test",
		component: test,
	},
	{
		path: "/liked",
		name: "liked",
		component: liked,
	},
	{
		path: "/profile",
		name: "profile",
		component: profile,
	},
	{
		path: "/settings",
		name: "settings",
		component: settings,
	},
	{
		path: "/notifications",
		name: "notifications",
		component: notifications,
	},
	{
		path: "/product",
		name: "product",
		component: product,
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
