import * as ping from 'net-ping'

export default class Ping {
	constructor(target) {
		this.target = target;
	}

	start(timeout) {
		if(this.active == true)
			throw new Error(`${this.target.name} (${this.target.target}) is active.`)

		this.session = ping.createSession();

		this.ping();
		this.interval = setInterval(this.ping.bind(this), timeout);

		this.active = true;
	}

	ping() {
		this.session.pingHost(this.target.target, (err, target, sent, rcvd) => {
			this.current = rcvd - sent;
			if(err)
				console.log(target + ": " + err.toString());
			else
				console.log(target + ": Alive (ms=" + this.current + ")");
		});
	}

	stop() {
		clearInterval(this.interval);
		this.interval = undefined;

		this.session.close();
		this.session = undefined;

		this.current = undefined;

		this.active = false;
	}
}