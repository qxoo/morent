<template>
  <Header :btnContent="headerContent"/>
  <router-view/>
</template>

<script>
	import Header from '@/components/header.vue'
	  export default {
	  components: {
	    Header
	  },
	  data() {
	    return {
	      headerContent: [
	        {icon: "", link: "/liked"},
	        {icon: "", link: "/notifications"},
	        {icon: "", link: "/settings"},
	        {icon: "", link: "/profile"},
	      ]
	    }
	  }
	}
</script>

<style lang="scss" scoped></style>
