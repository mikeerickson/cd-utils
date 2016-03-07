// MODULE TEST
// =============================================================================

/*global require*/

var chai  = require('chai');
var utils = require('../index')({showNotification: true});
var msg   = require('gulp-messenger');

var expect  = chai.expect;
var should = chai.should();

describe('cd-utils', function() {
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
		var ret = process.platform;
		if ( ret === 'windows') {
			expect(utils.isWindows()).to.be.true;
		}
		// expect(process.platform).to.equal('Task Completed Successfully');
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
		var value = util.param('t');
		expect(value).to.equal('7000')
	})

});
