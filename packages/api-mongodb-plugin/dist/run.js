"use strict";
// A ts for testing an api call
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
var endpoint = 'get_blocks';
index_1.default[endpoint]({ "filter": true })
    .then(function (doc) {
    console.log(doc);
})
    .catch(function (err) {
    console.error(err);
});
setTimeout((function () {
    return process.exit(22);
}), 300);