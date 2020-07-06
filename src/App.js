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
    function strSplit(string, char) {
        let arr = [];

        if (string.length === 0) {
            return [];
        }
        let charIndex = string.indexOf(char);

        if (charIndex == -1) {
            return [string];
        }
        if (charIndex == 0) {
            return strSplit(string.slice(1), '/');
        }

        let beginning = string.slice(0, charIndex);
        let remainingStr = string.slice(charIndex + 1);

        arr = [beginning, ...strSplit(remainingStr, char)];
        return arr;
    }

    console.log(strSplit('02/20/2020/', '/'));

    //Output: ["02", "20", "2020"]

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
    function solveMaze(array, currentPos, path) {
        let row = currentPos[0];
        let col = currentPos[1];

        if (array[row][col] === 'e') {
            return path;
        }
        if (row < array.length - 1) {
            if (array[row + 1][col] !== '*') {
                array[row][col] = '*';
                return solveMaze(array, [row + 1, col], path + 'D');
            }
        }
        //or = to?
        if (row > 0) {
            if (array[row - 1][col] !== '*') {
                array[row][col] = '*';
                return solveMaze(array, [row - 1, col], path + 'U');
            }
        }
        if (col < array[0].length - 1) {
            if (array[row][col + 1] !== '*') {
                array[row][col] = '*';
                return solveMaze(array, [row, col + 1], path + 'R');
            }
        }
        //or = to?
        if (col > 0) {
            if (array[row][col - 1] !== '*') {
                array[row][col] = '*';
                return solveMaze(array, [row, col - 1], path + 'L');
            }
        }
    }

    let mySmallMaze = [
        [' ', ' ', 'e'],
        [' ', '*', ' '],
        [' ', ' ', ' '],
    ];

    console.log(solveMaze(mySmallMaze, [0, 0], ''));

    // 9. Find ALL the ways out of the maze
    let maze = [
        [' ', ' ', ' ', '*', ' ', ' ', ' '],
        ['*', '*', ' ', '*', ' ', '*', ' '],
        [' ', ' ', ' ', ' ', ' ', '*', ' '],
        [' ', '*', '*', ' ', '*', '*', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
    ];
    function print(maze) {
        maze.forEach(row => {
            console.log(row.join(' '));
        });
    }
    function solveMaze(maze, index) {
        let paths = [];
        //print(maze);
        let row = index[0];
        let col = index[1];
        let mazeHeight = maze.length;
        let mazeWidth = maze[0].length;
        if ('e' === maze[row][col]) {
            return [''];
        }
        // mark the current spot as visited
        maze[row][col] = '.';
        //down
        let nextRow = row + 1;
        let nextCol = col;
        if (
            nextRow < mazeHeight &&
            (maze[nextRow][nextCol] === ' ' || maze[nextRow][nextCol] === 'e')
        ) {
            let downResult = solveMaze(maze, [nextRow, nextCol]);
            if (downResult.length != 0) {
                //We did find a solution
                downResult.forEach(p => paths.push('D' + p));
            }
        }
        //right
        nextRow = row;
        nextCol = col + 1;
        if (
            nextCol < mazeWidth &&
            (maze[nextRow][nextCol] === ' ' || maze[nextRow][nextCol] === 'e')
        ) {
            let rightResult = solveMaze(maze, [nextRow, nextCol]);
            if (rightResult.length !== 0) {
                //We did find a solution
                rightResult.forEach(p => paths.push('R' + p));
            }
        }
        //left
        nextRow = row;
        nextCol = col - 1;
        if (nextCol >= 0 && (maze[nextRow][nextCol] === ' ' || maze[nextRow][nextCol] === 'e')) {
            let leftResult = solveMaze(maze, [nextRow, nextCol]);
            if (leftResult.length !== 0) {
                //We did find a solution
                leftResult.forEach(p => paths.push('L' + p));
            }
        }
        //up
        nextRow = row - 1;
        nextCol = col;
        if (nextRow >= 0 && (maze[nextRow][nextCol] === ' ' || maze[nextRow][nextCol] === 'e')) {
            let upResult = solveMaze(maze, [nextRow, nextCol]);
            if (upResult.length !== 0) {
                //We did find a solution
                upResult.forEach(p => paths.push('U' + p));
            }
        }
        // if all fails - no directions work
        maze[row][col] = ' ';
        return paths;
    }
    console.log(solveMaze(maze, [0, 0]));

    // 10. Anagrams
    function anagram(string) {
        const output = [];
        function traverse(string, perm = '') {
            const seen = new Set();
            if (!string) output.push(perm);
            for (let i = 0; i < string.length; i++) {
                if (!seen.has(string[i])) {
                    seen.add(string[i]);
                    traverse(string.slice(0, i) + string.slice(i + 1), perm + string[i]);
                }
            }
        }
        traverse(string);
        return output;
    }
    console.log(anagram('east'));

    // 11. Organization Chart
    let orgOther = [
        'Zuckerberg',
        [
            'Schroepfer',
            ['Bosworth', ['Steve', 'Kyle', 'Andra'], 'Zhao', ['Richie', 'Sofia', 'Jen']],
            'Schrage',
            ['VanDyck', ['Sabrina', 'Michelle', 'Josh'], 'Zhao', ['Blanch', 'Tom', 'Joe']],
            'Sandberg',
            [
                'Goler',
                ['Eddie', 'Julie', 'Annie'],
                'Hernandez',
                ['Rowi', 'Inga', 'Morgan'],
                'Moissinac',
                ['Amy', 'Chuck', 'Vinni'],
                'Kelley',
                ['Eric', 'Ana', 'Wes'],
            ],
        ],
    ];

    let new_printList = function (indent, list) {
        let i;
        for (i = 0; i < list.length; i++) {
            if (Array.isArray(list[i])) {
                new_printList(indent + '   ', list[i]);
            } else {
                console.log(indent + list[i]);
            }
        }
    };

    new_printList(' ', orgOther);

    // 12. Binary Representation
    function toBinary(num) {
        if (num == 0) {
            return '0';
        }

        if (num == 1) {
            return '1';
        } else {
            return toBinary(Math.floor(num / 2)) + (num % 2);
        }
    }

    console.log(toBinary(17));

    return (
        <div className="App">
            <p>hello</p>
        </div>
    );
}

export default App;
