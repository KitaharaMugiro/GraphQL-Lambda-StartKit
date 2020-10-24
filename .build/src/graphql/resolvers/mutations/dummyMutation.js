"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function dummyMutation(_, args) {
    const { input: { firstInput, secondInput } } = args;
    console.log(`Mutation with inputs firstInput=${firstInput} and secondInput=${secondInput}`);
    return true;
}
exports.default = dummyMutation;
//# sourceMappingURL=dummyMutation.js.map