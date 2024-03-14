"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_request_1 = require("graphql-request");
var graphql_request_2 = require("graphql-request");
var dotenv_1 = require("dotenv");
var fs_1 = require("fs");
var path = require("path");
(0, dotenv_1.config)();
var grafbase = new graphql_request_2.GraphQLClient(process.env.STRAPI_GRAPHQL_URL);
var graphQLLoadTranslations = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, grafbase
                    .request((0, graphql_request_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        query {\n          en: stringsTranslations(pagination: { pageSize: 999 }, locale: \"en\") {\n            data {\n              id\n              attributes {\n                stringID\n                value\n              }\n            }\n          }\n          fr: stringsTranslations(pagination: { pageSize: 999 }, locale: \"fr\") {\n            data {\n              id\n              attributes {\n                stringID\n                value\n              }\n            }\n          }\n        }\n      "], ["\n        query {\n          en: stringsTranslations(pagination: { pageSize: 999 }, locale: \"en\") {\n            data {\n              id\n              attributes {\n                stringID\n                value\n              }\n            }\n          }\n          fr: stringsTranslations(pagination: { pageSize: 999 }, locale: \"fr\") {\n            data {\n              id\n              attributes {\n                stringID\n                value\n              }\n            }\n          }\n        }\n      "]))))
                    .then(function (result) {
                    var translations = {
                        en: {},
                        fr: {},
                    };
                    result["en"]["data"].forEach(function (translation) {
                        translations["en"][translation["attributes"]["stringID"]] =
                            translation["attributes"]["value"];
                    });
                    result["fr"]["data"].forEach(function (translation) {
                        translations["fr"][translation["attributes"]["stringID"]] =
                            translation["attributes"]["value"];
                    });
                    // Create a directory to store the translations if it doesn't exist. The directory is created in the root of the project
                    var dir = path.join(__dirname, "../src/assets");
                    if (!(0, fs_1.existsSync)(dir)) {
                        (0, fs_1.mkdirSync)(dir);
                        var translationsDir = path.join(dir, "translations");
                        if (!(0, fs_1.existsSync)(translationsDir)) {
                            (0, fs_1.mkdirSync)(translationsDir);
                        }
                    }
                    // Write the translations to a file. If the file doesn't exist, it will be created and if it does, it will be overwritten
                    (0, fs_1.writeFileSync)("".concat(dir, "/translations/translations.json"), JSON.stringify(translations, null, 2));
                })];
            case 1:
                response = _a.sent();
                return [2 /*return*/];
        }
    });
}); };
graphQLLoadTranslations();
var templateObject_1;
