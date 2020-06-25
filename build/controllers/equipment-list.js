"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.equipmentList = void 0;
const uuid_1 = require("uuid");
const moment_1 = __importDefault(require("moment"));
exports.equipmentList = async (payload) => {
    return [
        {
            equipmentNumber: uuid_1.v4(),
            address: "asdfasdf asdf",
            contractStartDate: moment_1.default().format(),
            contractEndDate: moment_1.default().format(),
            status: "RUNNING",
        },
        {
            equipmentNumber: uuid_1.v4(),
            address: "asdfasdf asdf",
            contractStartDate: moment_1.default().format(),
            contractEndDate: moment_1.default().format(),
            status: "RUNNING",
        },
        {
            equipmentNumber: uuid_1.v4(),
            address: "asdfasdf asdf",
            contractStartDate: moment_1.default().format(),
            contractEndDate: moment_1.default().format(),
            status: "RUNNING",
        },
    ];
};
//# sourceMappingURL=equipment-list.js.map