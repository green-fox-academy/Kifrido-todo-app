'use strict';

const fs = require('fs');

const args: string[] = process.argv;

let mainProcess = () => {

    if (args.length == 2){
      console.log('Command Line Todo application'+'\n' + '=============================' + '\n' + '\n' + 'Command line arguments:' + '\n' + '-l   Lists all the tasks' + '\n'
      + '-a   Adds a new task' +'\n' + '-r   Removes a task' + '\n' + '-c   Completes a task');
    }
}
    
  mainProcess();