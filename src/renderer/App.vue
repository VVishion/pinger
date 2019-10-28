<template>
  <div id="app">
		<layout id="layout">
			<template slot="header">
				<div class="header">
					<ping-input/>
				</div>
			</template>
			<template slot="content">
				<div class="flex content">
					<div id="saved-targets-list" class="flex content scrollable">
						<!--<target-list/>-->
					</div>
					<div class="active-header">active</div>
					<div id="active-pings-list" class="scrollable">
						<ping-list/>
					</div>
				</div>
			</template>
			<template slot="footer">
			</template>
		</layout>
  </div>
</template>

<script>
import layout from '@/components/layout'
import pingList from '@/components/ping-list'
import targetList from '@/components/target-list'
import pingInput from '@/components/ping-input'

export default {
	name: 'ping-app',
  components: {
		'layout': layout,
		'ping-list': pingList,
		'target-list': targetList,
		'ping-input': pingInput
  }
}
</script>


<style>
* {
	font-family: 'HK Grotesk', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	font-size: 14px;
	font-weight: 500;
	color: #dddddd;
}

input {
	border: none;
	background-color: #171717;
}

#active-pings-list {
	max-height: 100%;
	height: 100%;
}

#app {
	background-color: #282828;
}

ul {
	padding: 0;
	list-style: none;
}

button {
	border: none;
	background: none;
	cursor: pointer;
}

button:active {
	font-weight: 500;
}

/* fixed header, footer, scrollable main*/
#layout {
	height: 100vh;
}

.header {
}

main {
	overflow-y: hidden;
}

.content {
	/* flex enables scrolling in list */
	flex-direction: column;

/*	padding: 0 1.5em;*/
/*	padding: 0 10px;*/
}

.scrollable {
	overflow: auto;
}

.list {
	margin: 0;
	padding: 0 10px;
	overflow-y: auto;
}

li {
	margin: 1em 0;
}

.row > * {
	flex: 1;
}
.row > *:first-child {
	flex-shrink: 2;
}

*::-webkit-scrollbar {
	width: 3px;
	background-color: #F5F5F5;
}
*::-webkit-scrollbar-thumb {
	background-color: #2c3e50;
	border-radius: 1000px;
}
</style>

<style>
	.active-header {
		font-weight: bold;
		text-transform: uppercase;
		font-size: 12px;
		background-color: #333333;
		padding: 4px 7px;
		box-shadow: 1px 3px 2px #151515;
	}

	#ping-input {
		background-color: #202020;
		/*background-color: #282828;*/
		box-shadow: 1px 3px 2px #151515;
	}
</style>
