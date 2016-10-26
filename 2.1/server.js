const http = require('http');
const querystring = require('querystring');
const port = 3000;

let itemsJSON = '[{"id": 1, "name": "table", "amount": 10},{"id": 2, "name": "chair", "amount": 20},{"id": 3, "name": "board", "amount": 30}]';

const outputResult = (res, action, data, itemsJSON) => {
  res.write(`Action: ${action}\n`);
  res.write(`Request data: ${querystring.stringify(data)}\n`);
  res.write('Result:\n');
  res.write(itemsJSON);
};

const start = () => {
  function handler(req, res) {
    let data = '';
    let path = req.url;
    req.on('data', chunk => data += chunk);
    req.on('error', (err) => {
      res.write(err);
    });
    req.on('end', () => {
      res.writeHead(200, 'OK', {'Content-Type': 'text/plain'});
      let action = path.slice(1,path.length);
      data = querystring.parse(data);

      if (action.length == 0) {
        res.write('Error: No action');
      } else {
        let items = JSON.parse(itemsJSON);
        switch(action){
          case 'register':
            let newItem = {
              id: Date.now(),
              name: data.name,
              amount: data.amount
            };
            items.push(newItem);
            itemsJSON = JSON.stringify(items);
            outputResult(res, action, data, JSON.stringify(newItem));
            break;
          case 'add':
            let i;
            for (i=0; i<items.length; i++){
              if (items[i].id==data.id) break;
            };
            items[i].amount += parseInt(data.amount);
            itemsJSON = JSON.stringify(items);
            outputResult(res, action, data, JSON.stringify(items[i]));
            break;
          case 'delete':
            let j;
            for (j=0; j<items.length; j++){
              if (items[j].id==data.id) break;
            };
            items[j].amount -= parseInt(data.amount);
            itemsJSON = JSON.stringify(items);
            outputResult(res, action, data, JSON.stringify(items[j]));
            break;
          case 'left':
            outputResult(res, action, data, itemsJSON);
            break;
        }
      }

      res.end();
    });

  }

  const server = http.createServer();
  server.on('error', err => console.error(err));
  server.on('request', handler);
  server.on('listening', () => {
    console.log('Start HTTP on port %d', port);
  });
  server.listen(port);
};

module.exports = start;