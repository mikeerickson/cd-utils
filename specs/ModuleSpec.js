// MODULE TEST
// =============================================================================

/*global require*/

var chai  = require('chai');
var utils = require('../index');

var expect  = chai.expect;
var should = chai.should();

describe('cd-utils', function() {
	it('should pass', function() {
		var foo = true;
		expect(true).to.be.true;
		foo.should.be.a('boolean').and.equal(true);
	});
});
