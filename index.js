const { spy } = require("chai");

function receivesAFunction(spy) {
 console.log(spy()) ;
}
receivesAFunction(spy)

function returnsANamedFunction() {
    return returnsANamedFunction
}

function returnsAnAnonymousFunction() {
    return function() {

    }

}