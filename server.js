const express = require('express');
const app = express();
const rendertron = require('rendertron-middleware');
const path = require('path');
const fs = require('fs');

const port = process.env.NODE_PORT || 3001;

const root = path.join(__dirname, 'dist', 'angular-features-list');

const BOTS = rendertron.botUserAgents.concat('googlebot');
const BOT_UA_PATTERN = new RegExp(BOTS.join('|'), 'i');
const puppeteer = require('puppeteer');

console.log(BOTS);
console.log(BOT_UA_PATTERN);

// Rendertron SEO Implementation.
app.use(rendertron.makeMiddleware({
  proxyUrl: 'http://localhost:3000/render/',
 // userAgentPattern: BOT_UA_PATTERN
}));

// Rendertron SEO Implementation with remote proxy url.
// app.use(rendertron.makeMiddleware({
//   proxyUrl: 'https://render-tron.appspot.com/render/',
//   userAgentPattern: BOT_UA_PATTERN
// }));

// Puppeteer SEO implementation.
// app.get('*', async (req, res) => {
//   const browser = await puppeteer.launch({headless: true});
//   const page = await browser.newPage();

//   const local_url = 'http://localhost:8080' + req.originalUrl;
//   await page.goto(local_url, {
//       waitUntil: "networkidle0",
//   });

//   const html = await page.evaluate(() => {
//       return document.documentElement.innerHTML;
//   });

//   res.send(html);
// });

app.get('*' ,function(req, res) {
  // console.log(req.originalUrl);
  fs.stat(root + req.path, function(err){
    if(err){
        res.sendFile("index.html", { root });
    }else{
        res.sendFile(req.path, { root });
    }
  })
});

app.listen(port);
console.log('Listening on port '+ port);
