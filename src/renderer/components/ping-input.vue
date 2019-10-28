<template>
	<form id="ping-input" v-on:submit.prevent="ping()">
		<!--IPv6 addresses are represented as eight groups, separated by colons, of four hexadecimal digits-->
		<!--e.g. 2001:0db8:0000:0000:0000:8a2e:0370:7334-->
		<!--input length is 8*4+7 at max-->
		<input v-model="target" type="text" class="target-input" name="target-input" placeholder="Target" maxlength="39"/>
		<input v-model.number="interval" type="number" class="interval-input" name="interval-input" placeholder="Interval">
		<span class="ping"><button class="ping">ping</button></span>
	</form>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import targetInput from './target-input';
import toggleInput from './toggle-input';
import Ping from '../ping';

export default {
	name: 'ping-input',
	components: {
		'target-input': targetInput,
		'toggle-input': toggleInput
	},
	data() {
		return {
			target: undefined,
			interval: 1000
		}
	},
	methods: {
		...mapActions('pings', {
			add: 'add'
		}),
		ping(payload) {
			const target = { name: '', target: this.target };
			const ping = new Ping({ name: '', target: this.target });
			this.add(ping);

			ping.start(this.interval);

			this.target = undefined;
		}
	}
}
</script>

<style scoped>
	#ping-input {
		padding: 10px;
	}

	.target-input {
	}

	input {
		margin: 3px 0;
		padding: 2px;
	}

	::placeholder {
		color: #aaaaaa;
	}

	span.ping {
		margin: 2px;
		float: right;
	}

	button.ping {
		padding: 2px;
	}
</style>