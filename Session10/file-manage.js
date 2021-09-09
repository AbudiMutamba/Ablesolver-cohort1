const fs = require('fs')

fs.open('./.gitignore', 'r', (err, fd) => {
    console.log(fd)
})

fs.open('./logs', 'r+', (err, fd) => {
    console.log(fd)
})

fs.open('./logs', 'w+', (err, fd) => {
    console.log(fd)
})

try{

    const fd = fs.openSync('test.text','w+')
    console.log('openSync' + fd)
    fs.closeSync(fd)
    console.log('After closing' + fd )
} catch (err) {
    console.error(err)
}

/**
 * Quiz add the description of fs.open or fs.openSync file modes below.
 *  fs.open - Access a file
 *  fs.openSync - Retruns an integer value that represents the file descriptor
 * File reading modes.
 * r, r+, w+, a and a+
 * r:  Only opens an existing file for reading
 * r+: Only opens an existing file for writing and reading( It will show undefined if the file doesn't exist)
 * w+: Creates a file if it doesn't exit or truncates the existing file and opens the file for reading and writing
 * a:  Creates a file if it doesn't exit and opens a file in append mode
 * a+: Creates a file if it doesn't exit and opens a file in both reading and append mode(New data is appended at the end of the file)
 */