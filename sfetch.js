const OS = require('node:os');

const fetch = {
    hostname: OS.hostname(),
    OS: OS.type(),
    free_memory:  OS.freemem(),
    allocated_memory: OS.totalmem(),
    cpu_architecture: OS.arch(),
    cpu: OS.cpus()[0].model,
}

console.log('.-.,="``"=.	    ' + 'hostname: ' + fetch.hostname)
console.log('\'=/_       \\	    ' + 'OS: ' + fetch.OS);
console.log(' |  \'=._    |	    ' + 'cpu: ' + fetch.cpu);
console.log('  \\     `=./`,	    ' + 'cpu architecture: ' + fetch.cpu_architecture);
console.log('   \'=.__.=\' `=\'     ' + 'memory: ' + Math.round(fetch.free_memory / 1000000) + '/' + Math.round(fetch.allocated_memory / 1000000));
