const fs = require('fs');
const crypto = require('crypto');

const Transform = require('stream').Transform;
const Readable = require('stream').Readable;
const Writable = require('stream').Writable;

const input = fs.createReadStream("input.txt");
const output = fs.createWriteStream("output.txt");

input.on('error', err =>{
  console.log(err);
});
output.on('error', err =>{
  console.log(err);
});

class HexTransform extends Transform {
  constructor(options) {
    super(options);
  }
  _transform(chunk, encoding, callback){
    chunk = chunk.toString('hex');
    this.push(chunk);
    callback();
  }
}

const transform = new HexTransform();
const hash = crypto.createHash('md5');

input.pipe(hash).pipe(transform).pipe(output);
input.pipe(hash).pipe(transform).pipe(process.stdout);

/* ================================================== */

class MyReadable extends Readable{
  constructor(options){
    super(options);
  }
  _read(size){
    this.push(Math.random().toString());
  }
}

class MyTransform extends Transform {
  constructor(options) {
    super(options);
  }
  _transform(chunk, encoding, callback){
    chunk = chunk.toString('hex');
    this.push(chunk);
    setTimeout(() => {
      callback();
    }, 1000);
  }
}

class MyWritable extends Writable{
  constructor(options){
    super(options);
  }
  _write(chunk, encoding, callback){
    console.log(chunk.toString());
    callback();
  }
}

const myReadStream = new MyReadable();
const myTransform = new MyTransform();
const myWriteStream = new MyWritable();

myReadStream.pipe(myTransform).pipe(myWriteStream);