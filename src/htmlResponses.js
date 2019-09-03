const fs = require('fs'); // pulls in file system module

// fs = file system module\
// __dirname is global in Node of whichever folder file is in. Allows you to
// specify relative paths from current file
const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);

const getIndex = (request, response) => {
  // allows you to write status code and JSON object of headers to send back
  response.writeHead(200, { 'Content-Type': 'text/html' });
  // Content type tells browser how to display data, renders it as HTML instead of
  // raw text
  // text-html is a Media type
  response.write(index);
  // can only send ONE response PER request, get one response
  // response is not sent until you call end
  response.end();
  // make sure all of data is written to response before you call end
};

const getPage2 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page2);
  response.end();
};

module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;
