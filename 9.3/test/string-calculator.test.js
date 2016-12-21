var assert = require('chai').assert;
var Calculator = require('../src/string-calculator');

describe('string calculator should', function() {
    it('return 0 for an empty string', function() {
        var calculator = new Calculator();

        var result = calculator.add("");

        assert.equal(result, 0);
    });
});