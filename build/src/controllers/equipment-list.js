"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equipmentList = void 0;
const cosmos_client_1 = require("../cosmos-client");
exports.equipmentList = async (payload) => {
    const result = await cosmos_client_1.findAll(payload.limit);
    return result;
};
//# sourceMappingURL=equipment-list.js.map