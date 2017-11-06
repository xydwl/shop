<template>
	<div>
		<pecoo-top></pecoo-top>
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
		created(){
			this.$store.dispatch('getUserInfo')
		},
	  components: {
	    'pecoo-top': headTop,
	    'pecoo-Bottom': footBottom
	  }
	}
</script>
