"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAppointment = exports.updateAppointment = exports.createAppointment = exports.getByReceiver = exports.getBySender = exports.getById = void 0;
const async_hander_1 = require("../../../helpers/async-hander");
const { get, getByReceiverId, getBySenderId, create, update, remove, } = require("../services/appointment-service");
exports.getById = (0, async_hander_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield get(req.params.id);
    if (!appointments)
        return res.status(404).json({ error: "Appointments not found" });
    return res.status(200).json(appointments);
}));
exports.getBySender = (0, async_hander_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield getBySenderId(req.params.senderId);
    if (!appointments)
        return res.status(404).json({ error: "Appointments not found" });
    return res.status(200).json(appointments);
}));
exports.getByReceiver = (0, async_hander_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield getByReceiverId(req.params.receiverId);
    if (!appointments)
        return res.status(404).json({ error: "Appointments not found" });
    return res.status(200).json(appointments);
}));
exports.createAppointment = (0, async_hander_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield res.status(201).json(create(req.body)); }));
exports.updateAppointment = (0, async_hander_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () { return yield res.status(200).json(update(req.body)); }));
exports.deleteAppointment = (0, async_hander_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield remove(req.params.id);
    return res.status(204).json({ message: "deleted" });
}));
