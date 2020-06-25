"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.equipmentGet = void 0;
const boom_1 = __importDefault(require("@hapi/boom"));
const cosmos_client_1 = require("../cosmos-client");
exports.equipmentGet = async (payload) => {
    const result = await cosmos_client_1.findOne(payload.equipmentNumber);
    if (result === null)
        return boom_1.default.notFound();
    return result;
};
//# sourceMappingURL=equipment-get.js.map