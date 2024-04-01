"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const typeorm_1 = require("typeorm");
const section_entity_1 = require("./section.entity");
const history_entity_1 = require("./history.entity");
let Board = class Board {
};
exports.Board = Board;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Board.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Board.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => section_entity_1.Section, section => section.board, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Board.prototype, "sections", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => history_entity_1.History, history => history.board),
    __metadata("design:type", Array)
], Board.prototype, "history", void 0);
exports.Board = Board = __decorate([
    (0, typeorm_1.Entity)()
], Board);
//# sourceMappingURL=board.entity.js.map