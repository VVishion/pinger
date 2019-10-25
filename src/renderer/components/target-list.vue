<template>
	<div>
		<ul class="list" v-if="targets.length">
		<li
			v-for="item in targets"
			:key="item.target"
		>
			<target v-bind:target="item"/>
		</li>
	</ul>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import target from './target';

export default {
	name: 'ping-list',
	computed: {
		...mapState({
			targets: 'targets'
		})
	},
  components: {
		'target': target
	},
	methods: {
		...mapMutations({
			add: 'addTarget',
			remove: 'removeTarget'
		})
	}
}
</script>