var Calculator = function() {

    var self = this;

    self.add = function(input) {
        var numbers = [];
        var customDelimeter;
        var reg;
        var hasDelimeters = false;

        if (!input) {
            return 0;
        }

        if (input.indexOf('//') === 0) {
            var firstNewLinePosition = input.indexOf('\n');

            customDelimeter = input.substring(2, firstNewLinePosition);
            reg = new RegExp(customDelimeter);
            numbers = input.split(reg);

            numbers[0] = 0;
            numbers[1] = numbers[1].substr(1,numbers[1].length);
        } else if ((input.indexOf(',') !== -1) || (input.indexOf('\n') !== -1)) {
            numbers = input.split(/[\n,]/);
        } else {
            for (var i=0; i<input.length; i++){
                if (isNaN(input[i])) {
                    hasDelimeters = true;
                    break;
                }
            };
            if (hasDelimeters){
                customDelimeter = input[i];
                reg = new RegExp(customDelimeter);
                numbers = input.split(reg);
            } else {
                numbers[0] = input;
            };
        }

        return numbers.reduce(function(sum, current){
            return sum + parseInt(current);
        }, 0);
    };
}

module.exports = Calculator;