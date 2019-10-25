import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		targets: [],
		pings: []
  },
  mutations: {
    addTarget(state, payload) {
			state.targets.push({
				name: payload.name,
				target: payload.target
			});	
		},
		getTargetPosition(state, target) {
			const targets = state.targets;

			for(let i = 0; i < targets.length; i++) {
				if(targets[i].name === target || targets[i].target === target)
					return i;
			}

			return -1;
		},
		getTarget(state, name) {
			const p = this.getTargetPosition(state, name);

			return state.targets[p];
		},
		removeTarget(state, target) {
			const p = this.getTargetPosition(state, target);

			if(p > -1)
				state.targets.splice(p, 1);
		},
		addPing(state, ping) {
			state.pings.push(ping);
			console.log(state.pings)
		},
		getPingPosition(state, target) {
			const active = state.pings;

			for(let i = 0; i < active.length; i++) {
				if(active[i].target.target === target.target)
					return i;
			}

			return -1;
		},
		getPing(state, target) {
			const p = this.getPingPosition(state, target);

			return this.pings[p];
		},
		removePing(state, target) {
			const p = this.getPingPosition(state, target);

			if(p > -1)
				state.pings.splice(p, 1);
		}
  }
})