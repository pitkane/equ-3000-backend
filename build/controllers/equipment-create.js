"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.equipmentCreate = void 0;
const uuid_1 = require("uuid");
const moment_1 = __importDefault(require("moment"));
exports.equipmentCreate = async (payload) => {
    const moro = "asdf";
    return {
        equipmentNumber: uuid_1.v4(),
        address: "asdfasdf asdf",
        contractStartDate: moment_1.default().format(),
        contractEndDate: moment_1.default().format(),
        status: "RUNNING",
    };
};
// duplicate nononon
//# sourceMappingURL=equipment-create.js.map