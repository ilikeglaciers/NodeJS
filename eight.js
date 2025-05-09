var fs = require('fs');

fs.unlink('writeMe.txt', (err) => {
 if (err) console.error("Error:", err);
 else console.log("File deleted successfully!");
});
//deletes the specified file.
//throw the error to run the code.