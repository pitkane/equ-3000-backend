"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./src/server");
const run = async () => {
    const server = await server_1.createServer();
    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server running PLEASE @ ${server.info.uri}`);
};
run();
//# sourceMappingURL=index.js.map