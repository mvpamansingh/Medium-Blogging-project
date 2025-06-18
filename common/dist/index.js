"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBloginput = exports.createBloginput = exports.signupInput = exports.signinInput = void 0;
const zod_1 = __importDefault(require("zod"));
const signupInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
    name: zod_1.default.string().optional()
});
exports.signupInput = signupInput;
const signinInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
    name: zod_1.default.string().optional()
});
exports.signinInput = signinInput;
const createBloginput = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string()
});
exports.createBloginput = createBloginput;
const updateBloginput = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    id: zod_1.default.number()
});
exports.updateBloginput = updateBloginput;
