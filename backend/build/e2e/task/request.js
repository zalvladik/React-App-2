"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requests = {
    post: (sectionId) => {
        return {
            sectionId,
            title: 'SuperTest POST',
            dueDate: 1711485506688,
            priority: 'Low',
            description: 'SuperTest POST',
        };
    },
    patch: (id, sectionId) => {
        return {
            id,
            sectionId,
            title: 'SuperTest PATCH',
            dueDate: 1711485506688,
            priority: 'Medium',
            description: 'SuperTest PATCH',
        };
    },
};
exports.default = requests;
//# sourceMappingURL=request.js.map