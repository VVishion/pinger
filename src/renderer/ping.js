import * as ping from 'net-ping'

import store from './store';

export default class Ping {
	constructor(target) {
		this.target = target;
		this.current = undefined;
	}

	start(timeout) {
		if(this.active == true)
			throw new Error(`${this.target.target} is already started.`)

		this.session = ping.createSession();

		this.session.on('error', function(err) {
			console.warn(err);
		});

		this.ping();
		this.interval = setInterval(this.ping.bind(this), timeout);

		this.active = true;
	}

	ping() {
		this.session.pingHost(this.target.target, (err, target, sent, rcvd) => {
			const current = rcvd - sent;
			store.dispatch('pings/updatePing', {
				ping: this,
				current: current
			});
			if(err)
				console.log(target + ": " + err.toString());
			else
				console.log(target + ": Alive (ms=" + current + ")");
		});
	}

	stop() {
		clearInterval(this.interval);
		this.interval = undefined;

		this.session.close();
		this.session = undefined;

		store.dispatch('pings/updatePing', {
			ping: this,
			current: undefined
		});

		this.active = false;
	}
}