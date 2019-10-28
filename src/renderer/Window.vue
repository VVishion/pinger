<template>
	<div id="window">
		<router-view></router-view>
	</div>
</template>

<script>
import titleBar from '@/components/title-bar'
import app from '@/App.vue'

export default {
	name: 'window',
	components: {
		'title-bar': titleBar
	}
}
</script>

<style>
	body {
		margin: 0;
		padding: 0;
		border-radius: 5px;
	}
</style>
