<template>
	<div>
		<span class="name">{{ping.target.name}}</span> <span class="target">({{ping.target.target}})</span>
		<span class="space">－</span>
		<span v-if="current" class="current"><span class="value" v-bind:style="{ color: color }">{{current}} ms</span> <span class="ms"></span></span>
		<span v-else>Error</span>
		<span class="stop"><button @click="stop()" class="stop" alt="stop pinging"></button></span>
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import Ping from '../ping'

export default {
	name: 'ping',
	props: {
		ping: Ping
	},
	computed: {
		current() {
			return this.ping.current;
		},
		color() {
			if(this.current < 60) {
				return '#54a31b';
			} else if(this.current < 120) {
				return '#d6a411';
			} else {
				return '#d61142';
			}
		}
	},
	methods: {
		...mapActions('pings', {
			remove: 'remove'
		}),
		stop() {
			this.ping.stop();

			this.remove(this.ping);
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

	.current > * {
		font-weight: bold;
	}

	.space {
		padding: 0 0.5em;
		color: #aaaaaa;
	}
</style>