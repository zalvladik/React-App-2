"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModule = void 0;
const common_1 = require("@nestjs/common");
const history_service_1 = require("../history/history.service");
const task_service_1 = require("./task.service");
const task_controller_1 = require("./task.controller");
const section_entity_1 = require("../../entities/section.entity");
const task_entity_1 = require("../../entities/task.entity");
const history_entity_1 = require("../../entities/history.entity");
const typeorm_1 = require("@nestjs/typeorm");
let TaskModule = class TaskModule {
};
exports.TaskModule = TaskModule;
exports.TaskModule = TaskModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([section_entity_1.Section, task_entity_1.Task, history_entity_1.History])],
        controllers: [task_controller_1.TaskController],
        providers: [task_service_1.TaskService, history_service_1.HistoryService],
    })
], TaskModule);
//# sourceMappingURL=task.module.js.map