// @ts-nocheck
import express from "express";
import bodyParser from "body-parser";
import mongodb from "mongodb";
import * as path from "node:path";
import mongouri from "mongodb-uri";
import { EJSON } from "bson";

const clients = new Map();
const app = express();
let server = null;

// parse application/json
app.use(bodyParser.json());

async function startServer(servicePath, appConfig) {
    const { port, connectionList } = appConfig;
    app.post("/api/runCommand", async (req, res) => {
        // body { connection, database, command}
        const { connection, database, command } = req.body;
        try {
            const client = await create(connection);
            const parsedCMD = EJSON.deserialize(JSON.parse(command));
            const result = await client.db(database).command(parsedCMD);

            return res.status(200).send(EJSON.serialize(result));
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    });
    app.post("/api/listConnections", (req, res) => {
        const connections = process.env.MONGO_URIS || connectionList || [];
        return res.send(connections);
    });
    const publicPath = path.join(servicePath, "public");
    app.use(express.static(publicPath));
    app.get("*", (req, res) =>
        res.sendFile(path.join(publicPath, "/index.html"))
    );

    server = app.listen(port, (err) => {
        if (err) throw err;
        console.log("> Ready on http://localhost:" + port);
    });
}
async function create(uri) {
    if (clients.has(uri)) {
        return clients.get(uri);
    }

    const client = new mongodb.MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const connectedClient = await client.connect();
    // create db
    const dbCollections = await connectedClient
        .db(mongouri.parse(uri).database)
        .collections();
    if (dbCollections.length === 0) {
        await connectedClient
            .db(mongouri.parse(uri).database)
            .collection("test")
            .insertOne({});
    }
    clients.set(uri, connectedClient);
    return connectedClient;
}

function stopService() {
    return new Promise((resolve, reject) => {
        if (server) {
            server.close((error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        } else {
            resolve(null);
        }
    });
}
export { startServer, stopService };
