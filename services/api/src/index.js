import express from "express";
import * as http from "http";
import cors from "cors";
import router from "./routes/router.js";

const app = express();
const server = http.createServer(app);
app.use(cors());
app.use(router);

const port = process.env.port || 3000;
server.listen(port, () => {
    console.log(`🚀 Server ready at: http://localhost:${port}`);
});