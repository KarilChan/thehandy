"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = __importDefault(require("https"));
const fetch = (url) => {
    return new Promise(resolve => {
        const callback = (response) => {
            let str = '';
            response.on('data', (chunk) => {
                str += chunk;
            });
            response.on('end', () => {
                resolve({
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    json: JSON.parse(str)
                });
            });
        };
        const request = https_1.default.request(url, callback);
        request.end();
    });
};
exports.default = fetch;
//# sourceMappingURL=fetch.js.map