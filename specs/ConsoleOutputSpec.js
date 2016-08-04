

var utils  = require('../index')();
var expect = require('chai').expect;
var should = require('chai').should();
var msg    = require('gulp-messenger');

require('mocha-sinon');

var defMsgOpts = {
	lineLenght: 40,
	logToFile:  true,
	logPath:    'spec/logs',
	logFile:    'testOptions.log'
};

describe('test console output', function () {

	var result = '';

	beforeEach(function () {
		this.sinon.stub(utils, 'error');
		this.sinon.stub(utils, 'success');
		this.sinon.stub(utils, 'info');
	});

	it('should test error output', function (done) {
		result = utils.error('error message');
		expect( utils.error.calledOnce ).to.be.true;
		expect( utils.error.calledWith('error message') ).to.be.true;
		done();
	});

	it('should test success output', function (done){
		result = utils.success('success message');
		expect( utils.success.calledOnce ).to.be.true;
		expect( utils.success.calledWith('success message'));
		done();
	});

	it('should test info output', function (done){
		result = utils.info('info message');
		expect( utils.info.calledOnce ).to.be.true;
		expect( utils.info.calledWith('info message'));
		done();
	});
});
