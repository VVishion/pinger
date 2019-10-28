<template>
	<div>
		<ul class="list" v-if="active.length">
			<li
				v-for="ping in active"
				:key="ping.target.target"
			>
				<ping v-bind:ping="ping"/>
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
			active: state => state.pings.current
		})
	},
  components: {
		'ping': ping
	}
}
</script>