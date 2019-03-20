"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_accounts_1 = __importDefault(require("./get_accounts"));
var get_block_latest_1 = __importDefault(require("./get_block_latest"));
var get_blocks_1 = __importDefault(require("./get_blocks"));
var get_block_1 = __importDefault(require("./get_block"));
exports.default = {
    get_accounts: get_accounts_1.default,
    get_block_latest: get_block_latest_1.default,
    get_blocks: get_blocks_1.default,
    get_block: get_block_1.default,
};