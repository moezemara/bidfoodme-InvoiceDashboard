import express from "express"
import https from "https"
import http from "http"
import fs from "fs"
import path from "path"
import config from "./config/Config.js"
import helmet from "helmet"
import hpp from "hpp"
import Database from "./connection/Database.js"
import * as response from './utils/Response.js'
import multer from 'multer';

// routers
import ApplicationRouter from './v1/Application/Application.Router.js'
import UserRouter from './v1/User/User.Router.js'

const app = express()

try {
  // certs options
  var options = {
    key: fs.readFileSync(path.join(path.resolve('.'), config.certificate.key)),
    cert: fs.readFileSync(path.join(path.resolve('.'), config.certificate.cert))
  };

  var server = https.createServer(options, app)
}catch{
  console.log('\x1b[31m%s\x1b[0m', "Couldn't find certs. starting without ssl")
  server = http.createServer(app);
}

// global variables in app

app.set('database', new Database()) // db connection

// allow cross origin
app.use(function(req, res, next) {
  const origin = req.headers.origin
  if(config.alloweddomain.indexOf(origin) > -1){
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true)
  }
  res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  next();
});

// sets default headers
app.use(helmet())
app.use(hpp())

// trusts apache2 proxy (first proxy)
app.set('trust proxy', 1)

// csrf protection
//app.use(csurf())


// enables json mode
app.use(express.json({limit: '25mb'}))

// handles json errors
app.use(function(err, req, res, next) {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return response.system(res, err)
  }
})

// app base routes
app.use("/v1/Application", ApplicationRouter)
app.use("/v1/User", UserRouter)


// handles all the unused links
app.all("/*", (req, res) => {
  const url = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`);

  return response.fail(res, url)
})

// starts the app
server.listen(config.port, () => {
  console.log('\x1b[32m%s\x1b[0m', "server starting on port : " + config.port)
})