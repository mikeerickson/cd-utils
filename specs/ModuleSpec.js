/**
 * ModuleSpec.js
 * Created: 2016.07.04 15:33 - mikee
 * =============================================================================
 */


/*global require*/

var chai    = require('chai');
var utils   = require('../index')({showNotification: true});
var msg     = require('gulp-messenger');
var pkgInfo = require('../package');

var expect  = chai.expect;
var should = chai.should();

describe('cd-utils', function () {

	var str    = '';
	var result = '';
	var value  = 0;
	var params = {};
	var opts   = {};
  var pluralize;

	beforeEach(function (){
		str       = 'Mike Erickson';
		pluralize = utils.pluralize;
	});

	it('should return version', function () {
		var version = utils.version();
		var pkgVers = pkgInfo.version;
		version.should.equal(pkgVers);
	});

	it('should return name', function () {
		var name    = utils.name();
		var pkgName = pkgInfo.name;
		name.should.equal(pkgName);
	});

	it('should return passing notification options', function () {
		opts = utils.notifyOptions('pass');
		expect(opts.title).to.equal('Passed');
	});

	it('should return failing information', function () {
		opts = utils.notifyOptions('fail');
		expect(opts.icon).to.contain('cd-utils/assets/test-fail.png');
	});

	it('should return failing message options', function () {
		opts = utils.failMessage({title: 'Test Title'});
		expect(opts.title).to.equal('Test Title');
		expect(opts.message).to.equal('Task Failed');
	});

	it('should return passing message options', function () {
		opts = utils.passMessage({title: 'Test Passing Title'});
		expect(opts.title).to.equal('Test Passing Title');
		expect(opts.message).to.equal('Task Completed Successfully');
	});

	it('should display failing notification', function () {
		result = utils.notifyFailed({message: 'Fail Notify Test'});
		expect(result).to.be.a('object');
	});

	it('should display passing notification', function () {
		result = utils.notifyPassed({message: 'Pass Notify Test'});
		expect(result).to.be.a('object');
	});

	it('should display error console message', function () {
		console.log(utils.error('error message'));
	});

	it('should display info console message', function () {
		console.log(utils.info('info message'));
	});

	it('should display success console message', function () {
		console.log(utils.success('success message'));
	});

	it('should display warning console message', function () {
		console.log(utils.warning('warning message'));
	});

	it('should return true if on windows', function () {
		if ( process.platform === 'windows') {
			expect(utils.isWindows()).to.be.true;
		}
	});

	it('should return true if on osx', function () {
		if ( process.platform === 'darwin') {
			expect(utils.isOSX()).to.be.true;
		}
	});

	it('should return true if on linux', function () {
		if ( process.platform === 'linux') {
			expect(utils.isLinux()).to.be.true;
		}
	});

	it('should return platform', function (){
		expect(utils.platform()).to.equal(process.platform);
	});

	it('should return false if not on windows', function () {
		if ( process.platform !== 'windows') {
			expect(utils.isWindows()).to.be.false;
		}
	});

	it('should interpolate template', function (){
		result = utils.mergeTemplate('Hello <%= name %>', {name: 'Mike'});
		result.should.equal('Hello Mike');
	});

	it('should return a timestamp', function () {
		var ts = utils.timestamp();
		var yr = new Date().getFullYear();
		expect(ts).to.contain(yr);
	});

	it('should perform difference between two dates', function () {
		var now  = '04/07/2016 16:20:00';
		var then = '04/07/2016 14:20:00';
		var diff = utils.difference(now,then);
		diff.should.equal('22:00:00:00');
		expect(diff).to.not.equal('Invalid date');
	});

	it('should have parameters', function () {
		params = utils.params();
		if ( utils.is.object(params) ) {
			params.should.be.a('object').and.not.be.empty;
		}
	});

	it('should have arguments', function () {
		args = utils.args();
		if ( utils.is.object(args) ) {
			args.should.be.a('object').and.not.be.empty;
		}
	});

	it('should retrieve parameter from command line parameters', function () {

		// ticket number (example -t 7000) will be cast to number
		value = utils.param('t');
		if ( utils.is.number(value) ) {
			expect(value).to.be.number;
		} else {
			expect(value).to.be.object;
		}
	})

	it('should retrieve argument from command line arguments', function () {

		// ticket number (example -t 7000) will be cast to number
		value = utils.arg('t');
		if ( utils.is.number(value) ) {
			expect(value).to.be.number;
		} else {
			expect(value).to.be.object;
		}
	})

	it('should pad left supplied string', function (){
		result = utils.padLeft(str, 20);
		expect(result.length).to.equal(20);
		expect(result).to.equal('       Mike Erickson');

		result = utils.padStart(str, 20);
		expect(result.length).to.equal(20);
		expect(result).to.equal('       Mike Erickson');
	});

	it('should pad right supplied string', function (){
		result = utils.padRight(str, 15);
		expect(result.length).to.equal(15);
		expect(result).to.equal('Mike Erickson  ');

		result = utils.padEnd(str, 15);
		expect(result.length).to.equal(15);
		expect(result).to.equal('Mike Erickson  ');
	});

	it('should pad center supplied string', function (){
		result = utils.padCenter(str, 20);
		expect(result.length).to.equal(20);
		expect(result).to.equal('   Mike Erickson    ');
	});

	it('should read file synchronously', function () {
		result = utils.readFile('./package.json','json');
		expect(result.name).to.equal('cd-utils');
	});

	it('should create directories', function () {
		result = utils.createDir(['./temp','./tmp','./logs']);
		expect(result).to.not.be.null;
	});

	it('should remove directory', function () {
		result = utils.removeDir(['./temp','./tmp','./logs']);
		expect(result).to.not.be.null;
	});

	it('should attempt to remove invalid directory but no errors should be displayed',function (){
		result = utils.removeDir(['./erickson','test.txt']);
		expect(result).to.not.be.null;
	});

	it('should remove file but suppress any errors', function (){
		result = utils.removeFile('test.txt');
		expect(result).to.not.be.null;
	});

	it('should create ellipsis string', function () {
		result = utils.ellipsis('Mike Erickson', 4);
		expect(result).to.equal('Mike...')
	});

	it('should produce `defaults` using `extend`', function () {
		var opts = {fname: 'Mike'};
		var result = utils.extend(opts,{param: 'kira'});

		expect(result).to.include.keys('fname');
		expect(result).to.include.keys('param');
		expect(result).to.be.an('object');
	});

	it('should pluralize values',function () {
		expect(pluralize('test')).to.equal('tests')
		expect(pluralize('test', 1)).to.equal('test')
		expect(pluralize('test', 5)).to.equal('tests')
		expect(pluralize('test', 1, true)).to.equal('1 test')
		expect(pluralize('test', 5, true)).to.equal('5 tests')
	});

	// https://www.npmjs.com/package/kind-of
	it('should spot check `kindOf` instance', function () {
		expect(utils.kindOf({})).to.be.object;
		expect(utils.kindOf([])).to.be.array;
		expect(utils.kindOf('name')).to.not.be.array;
		expect(utils.kindOf(['name'])).to.not.be.object;
		expect(utils.kindOf(new Date())).to.not.be.object;
		expect(utils.kindOf(new Map())).to.not.be.map;
		expect(utils.kindOf(new WeakSet())).to.not.be.weakset;
	});

});
