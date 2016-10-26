const startServer = require("./server");
const querystring = require('querystring');
const http = require('http');

startServer();

function handler(response) {
  let data = '';
  response.on('data', function (chunk) {
    data += chunk;
  });
  response.on('end', function () {
    console.log(data);
  });
}

let registerData = querystring.stringify({
  'name':'book',
  'amount': 1
});

let registerOptions = {
  hostname: '127.0.0.1',
  port: 3000,
  path: '/register',
  method: 'POST',
  headers: {
  'Content-Type': 'application/x-www-form-urlencoded',
  'Content-Length': Buffer.byteLength(registerData)
  }
};

const registerRequest = http.request(registerOptions);
registerRequest.write(registerData);
registerRequest.on('response', handler);
registerRequest.end();

let addData = querystring.stringify({
  'id':'1',
  'amount': 5
});

let addOptions = {
  hostname: '127.0.0.1',
  port: 3000,
  path: '/add',
  method: 'POST',
  headers: {
  'Content-Type': 'application/x-www-form-urlencoded',
  'Content-Length': Buffer.byteLength(addData)
  }
};

const addRequest = http.request(addOptions);
addRequest.write(addData);
addRequest.on('response', handler);
addRequest.end();

let deleteData = querystring.stringify({
  'id':'2',
  'amount': 7
});

let deleteOptions = {
  hostname: '127.0.0.1',
  port: 3000,
  path: '/delete',
  method: 'POST',
  headers: {
  'Content-Type': 'application/x-www-form-urlencoded',
  'Content-Length': Buffer.byteLength(deleteData)
  }
};

const deleteRequest = http.request(deleteOptions);
deleteRequest.write(deleteData);
deleteRequest.on('response', handler);
deleteRequest.end();

let leftOptions = {
  hostname: '127.0.0.1',
  port: 3000,
  path: '/left',
  method: 'POST',
  headers: {
  'Content-Type': 'application/x-www-form-urlencoded'
  }
};

const leftRequest = http.request(leftOptions);
// leftRequest.write(leftData);
leftRequest.on('response', handler);
leftRequest.end();