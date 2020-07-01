import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    // 1. Counting Sheep
    const countSheep = function (numSheep) {
        //base case
        if (numSheep === 0) {
            return 'All sheep jumped over the fence';
        }

        return numSheep + ' Another sheep jumps over the fence ' + countSheep(numSheep - 1);
    };

    console.log(countSheep(3));

    // 2. Power Calculator
    function powerCalculator(base, exponent) {
        if (exponent < 0) {
            return undefined;
        }
        if (exponent < 1) {
            return 1;
        }
        return base * powerCalculator(base, exponent - 1);
    }

    // 3. Reverse String
    function stringReverse(string) {
        if (string === '') {
            return '';
        }
        return stringReverse(string.substr(1)) + string[0];
    }

    // 4. nth Triangular Number
    function triNum(num) {
        if (num === 1) {
            return 1;
        }
        return num + triNum(num - 1);
    }

    // 5. String Splitter
    //in progress
    function strSplit(string) {
        let arr = [];
        if (string.length === 0) {
            return '';
        }
        if (string[0] == char) {
            //split into new string in array
        }
        return something + strSplit(str.slice(1));
    }

    // 6. Fibonacci
    function fibonacci(a) {
        if (a <= 0) {
            return 0;
        }
        if (a == 1) {
            return 1;
        }
        return fibonacci(a - 1) + fibonacci(a - 2);
    }

    // 7. Factorial
    function factorial(num) {
        if (num === 1) {
            return 1;
        }
        return num * factorial(num - 1);
    }

    // 8. Find a way out of the maze
    //in progress
    function solveMaze(array) {
        if (array == 'e') {
            return '';
        }

        //
    }
    // 9. Find ALL the ways out of the maze
    // 10. Anagrams
    // 11. Organization Chart
    // 12. Binary Representation

    return (
        <div className="App">
            <p>hello</p>
        </div>
    );
}

export default App;
