var Calculator = function() {

    var self = this;

    self.add = function(input) {
        if (!input) {
            return 0;
        }

        if ((input.indexOf(',') === -1) && (input.indexOf('\n') === -1)){
            return parseInt(input);
        } else {
            numbers = input.split(/[\n,]/);

            return numbers.reduce(function(sum, current){
                return sum + parseInt(current);
            }, 0);
        }
    };
}

module.exports = Calculator;