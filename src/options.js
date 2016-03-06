module.exports = function (opts) {

	var options = opts;

	var module = {
		sayHello: _hello
	};

	function _hello(name) {
		if ( typeof name === 'undefined' ) {
			name = options.fname;
		}
		return 'hello ' + name;
	};

	return module;
};
