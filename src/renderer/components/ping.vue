<template>
	<div>
		<span class="name">{{ping.target.name}}</span> <span class="target">({{ping.target.target}})</span>
		<span v-if="current">{{current}}</span><span v-else>Error</span>
		<span class="stop"><button @click="stop()" class="stop" alt="stop pinging"></button></span>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Ping from '../ping'

export default {
	name: 'ping',
	props: {
		ping: Ping
	},
	computed: {
		current() {
			return this.ping.current;
		}
	},
	methods: {
		stop() {
			this.ping.stop();

			this.$store.commit('removePing', this.ping.target);
		}
	}
}
</script>

<style scoped>
	button.stop {
		padding: 0;
		margin: 0;
		width: 12px;
		height: 12px;
		background-color: #202020;
		border: 1px solid #aaaaaa;
		border-radius: 1px;
	}
	span.stop {
		float: right;
		margin-bottom: 1px;
	}

	.target {
		font-size: 12px;
		color: #aaaaaa;
	}
</style>