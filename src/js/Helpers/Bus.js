export default class {
	constructor() {
		this.messages = {};
	}

	on(message, callback) {
		if (!this.messages[message]) {
			this.messages[message] = [];
		}
		if (typeof callback === 'function') {
			this.messages[message].push(callback);
		}
	}

	emit(message, data) {
		if (this.messages[message]) {
			this.messages[message].forEach((func) => {
				func(data);
			});
		}
	}
}
