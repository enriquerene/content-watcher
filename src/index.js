class Pusher {
	constructor(callback, initialValue = null) {
		if (callback instanceof Function) {
			if (callback.length != 1) {
				throw new Error('Pusher constuctor first argument must be an one required parameter function.');
			}
			this.callback = callback;
			this.v = initialValue;
			this.alert.bind(this);
			this.pull.bind(this);
		} else {
			throw new Error('Pusher constructor requires a function as first argument.');
		}
	}
	get content() {
		return this.v;
	}
	set content(v) {
		if (this.v !== v) {
			this.v = v;
			this.alert();
		}
	}
	alert() {
		this.callback(this.v);
	}
	pull() {
		return (_v) => {
			this.content = _v;
		};
	}
};
export default Pusher;
