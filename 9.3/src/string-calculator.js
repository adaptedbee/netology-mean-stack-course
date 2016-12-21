var Calculator = function() {

    var self = this;

    self.add = function(input) {
        if (!input) {
            return 0;
        }

        if (input.indexOf(',') === -1){
            return parseInt(input);
        } else {
            numbers = input.split(/[,]/);
            return parseInt(numbers[0]) + parseInt(numbers[1]);
        }

    };
}

module.exports = Calculator;