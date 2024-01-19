"use strict";
const returnValue = (value) => value;
const message = returnValue('Hello World');
const count = returnValue(5);
function getFirstValueFromArray(array) {
    return array[0];
}
const firstValueFromStringArray = getFirstValueFromArray(["1", "2"]);
const firstValueFromNumberArray = getFirstValueFromArray([10, 20]);
