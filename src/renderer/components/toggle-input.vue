<template>
	<span>
		<slot v-if="input"><input class="input" v-model="value" v-on:submit="toggle()" size="size"/></slot>
		<button v-else @click="toggle()">{{value != undefined? value : placeholder}}</button>
	</span>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
	name: 'toggle-input',
	data() {
		return {
			input: false
		}
	},
	props: {
		value: String,
		placeholder: String
	},
	computed: {
		size() {
			return this.value != undefined ? this.value.length : placeholder.length;
		}
	},
	methods: {
		toggle() {
			this.input = !this.input;
		}
	}
}
</script>