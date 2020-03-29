const express = require('express');
const rendertron = require('rendertron-middleware');
const app = express();
const path = require('path');
const fs = require('fs');

const port = process.env.NODE_PORT || 3000;

const root = path.join(__dirname, 'dist', 'angular-features-list');
const BOTS = rendertron.botUserAgents.concat('googlebot');
const BOT_UA_PATTERN = new RegExp(BOTS.join('|'), 'i');
console.log(BOTS);
console.log(BOT_UA_PATTERN);

app.get('*' ,function(req, res) {

  fs.stat(root + req.path, function(err){
    if(err){
      console.log("1"+req.path);
        res.sendFile("index.html", { root });
    }else{
      console.log("2"+req.path);
        res.sendFile(req.path, { root });
    }
  })
});
app.use(rendertron.makeMiddleware({
  proxyUrl: 'https://render-tron.appspot.com//render',
  userAgentPattern: BOT_UA_PATTERN
}));
app.listen(port);
console.log('Listening on port '+ port);
