var assert = require('chai').assert;
var Calculator = require('../src/string-calculator');

describe('string calculator should', function() {
    it('return 0 for an empty string', function() {
        var calculator = new Calculator();

        var result = calculator.add("");

        assert.equal(result, 0);
    });

    it('return single number if input is that number', function() {
        var calculator = new Calculator();

        var sum = calculator.add("1");

        assert.equal(sum, 1);
    });

    it('return sum of any two comma separated values', function() {
        var calculator = new Calculator();

        var sum = calculator.add("1,2");

        assert.equal(sum, 1 + 2);
    });

    it('return sum of unknown amount of numbers', function() {
        var calculator = new Calculator();

        var sum = calculator.add("1,2,3,4,5");

        assert.equal(sum, 1 + 2 + 3 + 4 + 5);
    });

    it('return sum of unknown amount of numbers separated by new line', function() {
        var calculator = new Calculator();

        var sum = calculator.add("1\n2,3");

        assert.equal(sum, 6);
    });

    it('return sum of unknown amount of numbers separated by custom delimeter', function() {
        var calculator = new Calculator();

        var sum = calculator.add("//;\n1;2");

        assert.equal(sum, 3);
    });

    it('return sum of unknown amount of numbers separated by custom delimeter if first line is not provided', function() {
        var calculator = new Calculator();

        var sum = calculator.add("1@2");

        assert.equal(sum, 3);
    });

});