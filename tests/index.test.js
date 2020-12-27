import Pusher from '../src/index';

describe('Instance must throw.', function() {
	it('requires a callback parameter.', function() {
		expect.assertions(1);
		try {
			new Pusher();
		} catch(e) {
			expect(e.message).toBe('Pusher constructor requires a function as first argument.');
		}
	});
	it('callback must require one argument.', function() {
		expect.assertions(1);
		const noRequiredParameterFunction = () => {};
		try {
			new Pusher(noRequiredParameterFunction);
		} catch(e) {
			expect(e.message).toBe('Pusher constuctor first argument must be an one required parameter function.');
		}
	});
});
describe('Instance must not throw.', function() {
	let pusherInstance = null;
	const mockCallback = (_v) => {};

	it('has null content as default.', function() {
		pusherInstance = new Pusher(mockCallback);
		expect(pusherInstance.content).toBe(null);
		pusherInstance = null;
	});
	it('constructor accepts a second optional argument to set a custom initial content.', function() {
		const initialVal = true;
		pusherInstance = new Pusher(mockCallback, initialVal);
		expect(pusherInstance.content).toBe(initialVal);
		pusherInstance = null;
	});
	it('content could be updated.', function() {
		pusherInstance = new Pusher(mockCallback);
		const newContent = 'something';
		pusherInstance.content = newContent;
		expect(pusherInstance.content).toBe(newContent);
		pusherInstance = null;
	});
	it('content update must trigger callback.', function() {
		let someVar = null;
		const callback = (_v) => { someVar = _v };
		const newContent = 1;
		pusherInstance = new Pusher(callback);
		pusherInstance.content = newContent;
		expect(someVar).toBe(newContent);
		pusherInstance = null;
	});
	it('content initial value must not trigger callback.', function() {
		let someVar = null;
		const initialVal = {};
		pusherInstance = new Pusher(mockCallback, initialVal);
		expect(someVar).toBe(null);
		pusherInstance = null;
	});
});
