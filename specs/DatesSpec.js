/**
 * DatesSpec.js
 * Mike Erickson <codedungeon@gmail.com>
 * 2016.05.21 10:13 (mikee)
 * =============================================================================
 */

/* eslint no-undef:0*/
/* eslint no-unused-vars:0*/

// NOTE: I have only added a small sample of tests for date-fns to confirm package is working

var utils   = require('../index')();
var expect  = require('chai').expect;
var should  = require('chai').should();
var assert  = require('assert');
var msg     = require('gulp-messenger');

require('mocha-sinon');

describe('Date Routines', function() {

	var result;
	var dates;
	var dateList;
	beforeEach(function(){
		dates = utils.dates;
		dateList = (
			new Date(1966,9,15), 
			new Date(1976,4,2),
			new Date(1993,6,12),
			new Date(1995,1,28),
			new Date(1996,2,19),
			new Date(1997,3,12)
		)
	})

	it('should have formatted date', function(done) {
		result = dates.format(new Date(1966, 9, 15), 'MM/DD/YYYY');
		expect(result).to.equal('10/15/1966');
		done();
	});
	
	it('should be today',function(done){
		expect(dates.isToday(new Date())).to.be.true;
		done();
	});

	it('should pick closest date from array',function(done){
		var dateToCompare = new Date(2015, 8, 6);
		var dateList      = [ new Date(1994, 8, 1), new Date(2030, 0, 1) ];
		
		result = dates.closestTo(dateToCompare, dateList)
		expect(dates.format(result,'MM.DD.YYYY'))
			.to.equal(dates.format(dateList[1],'MM.DD.YYYY'));
		
		done();
	});

	it('should return distances to now',function(done){
		var startDate = new Date(2016,6,1);
		var targetDate = new Date(2016,13,25);
		var result = dates.distanceInWords(startDate, targetDate)

		expect(result).to.equal('8 months')
		result.should.equal('8 months')

		done();
	});
	
	it('should return the minium date from array',function(done) {
		
		var minDate     = dates.min(dateList)
		var compareDate = new Date(1997,3,12)

		result = dates.isEqual(minDate, compareDate)
		expect(result).to.be.true;

	  done();
	});
	
	it('should verify value is date',function(done) {
	  var result = dates.isDate('11-15-1997');
    expect(result).to.be.false;
	  
	  done();
	});

	it('should test date to be in the past',function(done) {
		result = dates.isPast(new Date(2014, 6, 2))
	  assert(result,true);

	  done();
	});

	it('should confirm minutes',function(done) {
	  var result = dates.getMinutes(new Date(2016,4,21,11,22,33))
	  result.should.equal(22);

	  done();
	});
	
	it('should add minutes',function(done) {
		var endDate = dates.addMinutes(new Date(2016,4,21,11,22,33), 11)
		result      = dates.getMinutes(endDate)
	  result.should.equal(33);
	  
	  done();
	});
});


