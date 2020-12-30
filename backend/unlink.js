

const fs = require('fs'),
      path = require('path');

const directory = 'temporary';

fs.readdir(directory, (err, files)=>{
    if(err) console.log('readdir err!@');

    for(let file of files){
        fs.unlink(path.join(directory, file), err=>{
            if(err) console.log( 'unlink err!@' );
        });
    }
});




