<template>
	<div id="title-bar">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'title-bar'
}
</script>


<style scoped>
	#title-bar {
		/* draggable */
		-webkit-user-select: none;
		-webkit-app-region: drag;

		padding: 0.1rem;

		font-size: 0.8rem;
		text-align: center;
		color: rgba(0, 0, 0, 0.7);
		background-color: rgba(0, 0, 0, 0.1);
	}
</style>
