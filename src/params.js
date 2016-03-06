module.exports = function (param) {

	var module = {
		doHello: sayHello,
		doFullName: getFullName
	};

	function sayHello(name) {
		var msg = 'hello ' + name;
		console.log(msg);
		return msg;
	};

	function getFullName(fname, lname) {
		return fullname(fname, lname);
	}

	function fullname(fname, lname) {
		return fname + ' ' + lname;
	}

	return module;
};
