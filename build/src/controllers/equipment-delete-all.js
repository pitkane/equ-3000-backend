"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.equipmentDeleteAll = void 0;
const boom_1 = __importDefault(require("@hapi/boom"));
const cosmos_client_1 = require("../cosmos-client");
exports.equipmentDeleteAll = async () => {
    const result = await cosmos_client_1.deleteAll();
    if (result === true)
        return { great: "success" };
    else
        return boom_1.default.internal("Failed to delete objects");
};
//# sourceMappingURL=equipment-delete-all.js.map