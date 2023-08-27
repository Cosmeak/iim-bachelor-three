import express from "express";
import * as http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/router.js";
import ip from "ip"

console.log(ip.address())

const app = express();
const server = http.createServer(app);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(router);

const port = process.env.port || 3000;
server.listen(port, () => {
    console.log(`🚀 Server ready at: http://${ip.address()}:${port}`);
});