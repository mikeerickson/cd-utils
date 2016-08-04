/**
 * PrintSpec.js
 * Mike Erickson <codedungeon@gmail.com>
 * 2016.05.21 14:01 (mikee)
 * =============================================================================
 */

/* eslint no-undef:0*/
/* eslint no-unused-vars:0*/

var utils   = require('../index')();
var expect  = require('chai').expect;
var should  = require('chai').should();
var assert  = require('assert');
var msg     = require('gulp-messenger');

require('mocha-sinon');

describe('sprintf Routines', function () {

	var result;
  var user;
	var sprintf;
	beforeEach(function (){
		user     = {fname: 'Mike', lname: 'Erickson'}
		sprintf  = utils.sprintf;
		vsprintf = utils.vsprintf;
		dates    = utils.dates;
	})

	it('should properly interpolate string using `sprintf` ',function (done) {

		result = sprintf('Hello %(fname)s', user)
		expect(result).to.equal('Hello Mike')

    done();
	});

	it('should place parameters in proper order',function (done) {
    var result = sprintf('%2$s %3$s a %1$s', 'cracker', 'Polly', 'wants')
    result.should.equal('Polly wants a cracker');

    done();
	});

	it('should perform calculation on interpolation',function (done) {
    result = sprintf('Current timestamp: %d', Date.now())
    expect(result.indexOf('NaN')).to.equal(-1);

    done();
	});

	it('should return result in callback',function (done) {
		result = sprintf('Current date and time: %s', function () {
			return new Date().toString()
		})
		expect(result.indexOf('undefined')).to.equal(-1);

    done();
	});

	it('should contain full name',function (done) {
    var result = sprintf('Hello, my name is %s %s', user.fname, user.lname)

    result.should.equal('Hello, my name is Mike Erickson');

    done();
	});

	it('should access object during interpolation',function (done) {
		result = sprintf('Hello, my name is %(fname)s %(lname)s', user)

		result.should.equal('Hello, my name is Mike Erickson')

		done();
	});

	it('should return letters of alphabet contained in array values via `vsprint` ',function (done) {
    result = vsprintf('The first 4 letters of the english alphabet are: %s, %s, %s and %s', ['a', 'b', 'c', 'd'])
    result.should.contain('a, b, c and d')

		assert(result.length > 0)

    done();
	});

});
