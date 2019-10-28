<template>
	<div class="layout flex">
		<header>
			<slot name="header"></slot>
		</header>
		<main class="flex">
			<slot name="content"></slot>
			<nav>
				<slot name="navigation"></slot>
			</nav>
			<aside>
				<slot name="aside"></slot>
			</aside>
		</main>
		<footer>
			<slot name="footer"></slot>
		</footer>
	</div>
</template>

<script>
export default {
	name: 'layout'
}
</script>

<style>
	.flex {
		display: flex;
	}
</style>


<style scoped>
	.layout {
		flex-direction: column;
	}

	main {
		flex: 1;
	}

	.content {
		flex: 1;
	}

	nav, aside {
		flex: 0 0 0;
	}

	nav {
		order: -1;
	}
</style>
