'use strict';

const fs = require('fs');

export function Todo(){
    let content: string [] = fs.readFileSync('List-of-tasks.txt', 'utf8')
    content.toString().trim().split(',');
    for (let i: number = 0; i < content.length; i++){
        console.log((i+1) + '.' + content);
    }

}

console.log(Todo());