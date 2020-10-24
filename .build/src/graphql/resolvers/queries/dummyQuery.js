"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function dummyQuery(_, args) {
    const { itemId } = args;
    console.log(`Query object with id ${itemId}`);
    return {
        firstItem: 'first',
        secondItem: 'second',
    };
}
exports.default = dummyQuery;
//# sourceMappingURL=dummyQuery.js.map