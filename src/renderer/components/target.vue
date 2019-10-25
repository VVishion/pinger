<template>
	<div>
		<span class="name">{{target.name}}</span> <span class="target">({{target.target}})</span>
		<button @click="add(target)">{{action}}</button>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
	name: 'target',
	computed: {
		action() {
			return 'ping'
		}
	},
	props: {
		target: {
			name: String,
			target: String
		}
	},
	methods: {
		...mapMutations({
			add: 'addPing',
			rem: 'removePing'
		})
	}
}
</script>