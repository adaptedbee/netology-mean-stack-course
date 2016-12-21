var Calculator = function() {

    var self = this;

    self.add = function(input) {
        if (!input) {
            return 0;
        }

        if (input.indexOf(',') === -1){
            return parseInt(input);
        }

    };
}

module.exports = Calculator;