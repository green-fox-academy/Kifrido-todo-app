'use strict';

import { Todo } from './input'
const fs = require('fs');

const args: string[] = process.argv;
let emptyContent: string = fs.readFileSync('empty.txt', 'utf-8')
let content: string = fs.readFileSync('List-of-tasks.txt', 'utf-8')
let linesContent : string [] = content.split('\n');


export let mainProcess = () => {

    if (args.length == 2){
      console.log(emptyContent);
    } else if (args[2] == '-l'){
        if(content == ""){
        console.log('No todos for today! :)');
    } else {
        for (let i: number = 0; i < linesContent.length; i++){
            console.log((i+1) + '. ' + linesContent[i]);
        }
    } 
    } if (args[2] == '-a'){
        
    }
}
 
mainProcess();