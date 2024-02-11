#!/bin/bash

case $1 in
    "addByOne.js")
        ./__tests__/__automate__.sh $1 "npm test -- addByOne.test.js" addByOne
    ;;
    "areaOfTriangle.js")
        ./__tests__/__automate__.sh $1 "npm test -- areaOfTriangle.test.js" areaOfTriangle
    ;;
    "celciusFahrenheit.js")
        ./__tests__/__automate__.sh $1 "npm test -- celciusFahrenheit.test.js" celciusToFahrenheit fahrenheitToCelcius
    ;;
    "multiplicationDivision.js")
        ./__tests__/__automate__.sh $1 "npm test -- multiplicationDivision.test.js" multiplication division
    ;;
    "trueOrFalse.js")
        ./__tests__/__automate__.sh $1 "npm test -- trueOrFalse.test.js" trueOrFalse
    ;;
    *)
        echo "Usage: $0 file-name"
        exit 1
esac


# Path: tests.sh