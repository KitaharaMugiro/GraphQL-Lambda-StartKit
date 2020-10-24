"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_lambda_1 = require("apollo-server-lambda");
// Inputs
const DummyInput_1 = __importDefault(require("./inputs/DummyInput"));
// Objects
const DummyObject_1 = __importDefault(require("./objects/DummyObject"));
// Root types
const Mutation_1 = __importDefault(require("./root/Mutation")); // tslint:disable-line ordered-imports
const Query_1 = __importDefault(require("./root/Query")); // tslint:disable-line ordered-imports
const typeDefStrings = [
    // Inputs
    DummyInput_1.default,
    // Objects
    DummyObject_1.default,
    // Root types
    Mutation_1.default,
    Query_1.default,
];
const typeDefs = typeDefStrings.map(typeDef => apollo_server_lambda_1.gql(typeDef));
exports.default = typeDefs;
//# sourceMappingURL=index.js.map