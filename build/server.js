"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const hapi_1 = __importDefault(require("@hapi/hapi"));
const inert_1 = __importDefault(require("@hapi/inert"));
const vision_1 = __importDefault(require("@hapi/vision"));
const hapi_swagger_1 = __importDefault(require("hapi-swagger"));
const joi_1 = __importDefault(require("@hapi/joi"));
const lodash_1 = __importDefault(require("lodash"));
const equipment_list_1 = require("./controllers/equipment-list");
const equipment_get_1 = require("./controllers/equipment-get");
const equipment_create_1 = require("./controllers/equipment-create");
const host = "0.0.0.0";
const port = 8080;
/** App */
exports.createServer = async () => {
    const serverOptions = {
        host,
        port,
    };
    const server = new hapi_1.default.Server(serverOptions);
    await server.register(inert_1.default);
    await server.register(vision_1.default);
    await server.register({
        plugin: hapi_swagger_1.default,
    });
    // ROUTES
    server.route({
        method: "GET",
        path: "/api/equipment/search",
        handler: (request, h) => {
            const payload = {
                limit: lodash_1.default.toNumber(request.query.limit),
            };
            return equipment_list_1.equipmentList(payload);
        },
        options: {
            id: "equipmentList",
            description: "equipmentList",
            tags: ["equipment"],
            validate: {
                query: joi_1.default.object({
                    limit: joi_1.default.number().required(),
                }),
            },
        },
    });
    server.route({
        method: "GET",
        path: "/api/equipment/{equipmentNumber}",
        handler: (request, h) => {
            const payload = {
                equipmentNumber: request.params.equipmentNumber,
            };
            return equipment_get_1.equipmentGet(payload);
        },
        options: {
            id: "equipmentGet",
            description: "equipmentGet",
            tags: ["equipment"],
            validate: {
                params: joi_1.default.object({
                    equipmentNumber: joi_1.default.string().required(),
                }),
            },
        },
    });
    server.route({
        method: "POST",
        path: "/api/equipment",
        handler: (request, h) => {
            return equipment_create_1.equipmentCreate(request.payload);
        },
        options: {
            id: "equipmentCreate",
            description: "equipmentCreate",
            tags: ["equipment"],
            validate: {
                payload: joi_1.default.object({
                    equipmentNumber: joi_1.default.string().required(),
                    address: joi_1.default.string().required(),
                    contractStartDate: joi_1.default.string().required(),
                    contractEndDate: joi_1.default.string().required(),
                    status: joi_1.default.string().valid("RUNNING", "STOPPED").required(),
                }),
            },
        },
    });
    return server;
};
//# sourceMappingURL=server.js.map