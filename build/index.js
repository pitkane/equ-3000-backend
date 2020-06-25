"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Hapi = require("@hapi/hapi");
const host = "0.0.0.0";
const port = 8080;
/** App */
const server = new Hapi.Server({ host, port });
/** Routes */
server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => "This is the GET route.",
});
server.route({
    method: "POST",
    path: "/",
    handler: (request, h) => {
        return {
            message: "This is the POST route, the data you sent is attached to this response",
            data: request.payload,
        };
    },
});
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield server.start();
        }
        catch (err) {
            console.log(err);
            process.exit(1);
        }
        console.log(`Server running @ ${server.info.uri}`);
    });
}
start();
//# sourceMappingURL=index.js.map