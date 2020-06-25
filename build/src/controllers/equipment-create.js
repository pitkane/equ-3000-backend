"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.equipmentCreate = void 0;
const boom_1 = __importDefault(require("@hapi/boom"));
const cosmos_client_1 = require("../cosmos-client");
exports.equipmentCreate = async (payload) => {
    const result = await cosmos_client_1.createOne(payload);
    if (result === true)
        return payload;
    else
        return boom_1.default.internal("Failed to create object");
};
//# sourceMappingURL=equipment-create.js.map