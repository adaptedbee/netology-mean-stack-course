var Calculator = function() {

    var self = this;

    self.add = function(input) {
        if (!input) {
            return 0;
        }

        var numbers;

        if ((input.indexOf(',') === -1) && (input.indexOf('\n') === -1)){
            return parseInt(input);
        } else {
            if (input.indexOf('//') === 0) {
                var firstNewLinePosition = input.indexOf('\n');

                var customDelimeter = input.substring(2, firstNewLinePosition);
                var reg = new RegExp(customDelimeter);

                numbers = input.split(reg);

                numbers[0] = 0;
                numbers[1] = numbers[1].substr(1,numbers[1].length);
            } else {
                numbers = input.split(/[\n,]/);
            }

            return numbers.reduce(function(sum, current){
                return sum + parseInt(current);
            }, 0);
        }
    };
}

module.exports = Calculator;