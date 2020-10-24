"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_lambda_1 = require("apollo-server-lambda");
const queries = __importStar(require("./resolvers/queries"));
const mutations = __importStar(require("./resolvers/mutations"));
const type_defs_1 = __importDefault(require("./type-defs"));
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = !NODE_ENV || !['production'].includes(NODE_ENV);
const resolvers = {
    Mutation: mutations,
    Query: queries,
};
const apolloServer = new apollo_server_lambda_1.ApolloServer({
    typeDefs: type_defs_1.default,
    resolvers,
    // subscriptions: {},
    introspection: IS_DEV,
});
exports.default = apolloServer.createHandler();
//# sourceMappingURL=apolloServer.js.map