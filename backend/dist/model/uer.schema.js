"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
const validator_1 = require("validator");
exports.UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        lowercase: true,
        required: [true, 'Please tell us your name!'],
    },
    email: {
        type: String,
        required: [true, 'Please provide your email!'],
        unique: true,
        lowercase: true,
        validate: [validator_1.default.isEmail, 'Please provide a valid email'],
    },
    password: {
        type: String,
        required: [true, 'Please provide a password!'],
        minlength: 3,
        select: false,
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm ypur password!'],
        validate: {
            validator: function (el) {
                return el === this.password;
            },
            message: 'Passwords are not the same!',
        },
    },
    createdDate: {
        type: Date,
        default: Date.now(),
    },
});
//# sourceMappingURL=uer.schema.js.map