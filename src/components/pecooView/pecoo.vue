<template>
	<div>
		<pecoo-top v-if ="routeName.indexOf('luxury')===-1"></pecoo-top>
		<router-view></router-view>
		<pecoo-Bottom></pecoo-Bottom>
	</div>
</template>

<script>
	import headTop from '../common/header'
	import footBottom from '../common/footer'
	export default{
	  data () {
	    return {

	    }
	  },
	  computed: {
	    routeName () {
	      return this.$route.path
	    }
	  },
	  created () {
	    this.$store.dispatch('getUserInfo')
	  },
	  components: {
	    'pecoo-top': headTop,
	    'pecoo-Bottom': footBottom
	  }
	}
</script>
