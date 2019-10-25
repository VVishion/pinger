<template>
	<div>
		<ul class="list" v-if="active.length">
			<li
				v-for="item in active"
				:key="item.target.target"
			>
				<ping v-bind:ping="item"/>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ping from '@/components/ping'

export default {
	name: 'ping-list',
	computed: {
		...mapState({
			active: 'pings'
		})
	},
  components: {
		'ping': ping
	}
}
</script>