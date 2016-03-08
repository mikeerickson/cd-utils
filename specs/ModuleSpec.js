// MODULE TEST
// =============================================================================

/*global require*/

var chai  = require('chai');
var utils = require('../index')({showNotification: true});
var msg   = require('gulp-messenger');

var expect  = chai.expect;
var should = chai.should();

describe('cd-utils', function() {

	var str    = '';
	var result = '';
	beforeEach(function(){
		str = 'Mike Erickson'
	});

	it('should pass', function() {
		var foo = true;
		expect(true).to.be.true;
		foo.should.be.a('boolean').and.equal(true);
	});

	it('should return passing notification options', function() {
		var opts = utils.notifyOptions('pass');
		expect(opts.title).to.equal('Passed');
	});

	it('should return failing information', function() {
		var opts = utils.notifyOptions('fail');
		expect(opts.icon).to.equal('./assets/test-fail.png');
	});

	it('should return failing message options', function() {
		var opts = utils.failMessage({title: 'Test Title'});
		expect(opts.title).to.equal('Test Title');
		expect(opts.message).to.equal('Task Failed');
	});

	it('should return passing message options', function() {
		var opts = utils.passMessage({title: 'Test Passing Title'});
		expect(opts.title).to.equal('Test Passing Title');
		expect(opts.message).to.equal('Task Completed Successfully');
	});

	it('should display failing notification', function() {
		var result = utils.notifyFailed({message: 'Fail Notify Test'});
	});

	it('should display passing notification', function() {
		var result = utils.notifyPassed({message: 'Pass Notify Test'});
	});

	it('should display error console message', function() {
		console.log(utils.error('error message'));
	});

	it('should display info console message', function() {
		console.log(utils.info('info message'));
	});

	it('should display success console message', function() {
		console.log(utils.success('success message'));
	});

	it('should display warning console message', function() {
		console.log(utils.warning('warning message'));
	});

	it('should return true if on windows', function() {
		result = process.platform;
		if ( result === 'windows') {
			expect(utils.isWindows()).to.be.true;
		}
	});

	it('should return true if on osx', function() {
		result = process.platform;
		if ( result === 'darwin') {
			expect(utils.isOSX()).to.be.true;
		}
	});

	it('should return true if on linux', function() {
		result = process.platform;
		if ( result === 'linux') {
			expect(utils.isLinux()).to.be.true;
		}
	});

	it('should return platform', function(){
		result = process.platform;
		expect(utils.platform()).to.equal(result);
	});

	it('should return false if not on windows', function() {
		var ret = process.platform;
		if ( ret !== 'windows') {
			expect(utils.isWindows()).to.be.false;
		}
	});

	it('should interpolate template', function(){
		var result = utils.mergeTemplate('Hello <%= name %>', {name: 'Mike'});
		result.should.equal('Hello Mike');
	});

	it('should return a timestamp', function() {
		var ts = utils.timestamp();
		var yr = new Date().getFullYear();
		expect(ts).to.contain(yr);
	});

	it('should perform difference between two dates', function() {
		var diff = utils.difference(new Date(), new Date());
		expect(diff).to.not.equal('Invalid date');
	});

	// it('should have parameters', function() {
	// 	msg.dump(utils.params);
	// 	return utils.params;
	// });

	it('should retrieve parameter from command line parameters', function() {
		var value = utils.param('t');
		expect(value).to.equal('7000')
	})

	it('should pad left supplied string', function(){
		result = utils.padLeft(str, 20);
		expect(result.length).to.equal(20);
		expect(result).to.equal('       Mike Erickson');

		result = utils.padStart(str, 20);
		expect(result.length).to.equal(20);
		expect(result).to.equal('       Mike Erickson');
	});

	it('should pad right supplied string', function(){
		result = utils.padRight(str, 15);
		expect(result.length).to.equal(15);
		expect(result).to.equal('Mike Erickson  ');

		result = utils.padEnd(str, 15);
		expect(result.length).to.equal(15);
		expect(result).to.equal('Mike Erickson  ');
	});

	it('should pad center supplied string', function(){
		result = utils.padCenter(str, 20);
		expect(result.length).to.equal(20);
		expect(result).to.equal('   Mike Erickson    ');
	});

	it('should read file synchronously', function() {
		result = utils.readFile('./package.json','json');
		expect(result.name).to.equal('cd-utils');
	});

});
