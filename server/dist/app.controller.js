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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const create_user_dto_1 = require("./DTOUser/create-user.dto");
const update_user_dto_1 = require("./DTOUser/update-user.dto");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(service) {
        this.service = service;
    }
    async getAllUsers() {
        return await this.service.findAll();
    }
    async findById(id) {
        if (id == null) {
            return this.service.findAll();
        }
        else {
            return await this.service.getUserById(id);
        }
    }
    async Create(createUser) {
        return await this.service.createUser(createUser);
    }
    async Update(id, updateUser) {
        console.log(updateUser);
        return await this.service.updateUser(id, updateUser);
    }
    async Delete(id) {
        return await this.service.deleteUser(id);
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)('newUser'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDTO]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "Create", null);
__decorate([
    (0, common_1.Put)('updateUser/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDTO]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "Update", null);
__decorate([
    (0, common_1.Patch)('deleteUser/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "Delete", null);
AppController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map