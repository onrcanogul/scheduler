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
exports.remove = exports.update = exports.create = exports.getByUser = exports.getByReceiverId = exports.getBySenderId = exports.get = void 0;
const pool = require("../repository/index");
const get = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = "SELECT * FROM Appointments WHERE id = $1";
    const result = yield pool.query(query, [id]);
    return result.rows[0];
});
exports.get = get;
const getBySenderId = (senderId) => __awaiter(void 0, void 0, void 0, function* () {
    const query = "SELECT * FROM Appointments WHERE sender_id = $1";
    const result = yield pool.query(query, [senderId]);
    return result.rows[0];
});
exports.getBySenderId = getBySenderId;
const getByReceiverId = (receiverId) => __awaiter(void 0, void 0, void 0, function* () {
    const query = "SELECT * FROM Appointments WHERE receiver_id = $1";
    const result = yield pool.query(query, [receiverId]);
    return result.rows[0];
});
exports.getByReceiverId = getByReceiverId;
const getByUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const query = "SELECT * FROM Appointments WHERE receiver_id = $1 OR senderId = $1";
    const result = yield pool.query(query, [userId]);
    return result.rows[0];
});
exports.getByUser = getByUser;
const create = (appointment) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(appointment);
    const query = "INSERT INTO appointments (sender_id, receiver_id, target_date, location, status, priority, deadline) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
    const values = [
        appointment.sender_id,
        appointment.receiver_id,
        appointment.target_date,
        appointment.location,
        appointment.status,
        appointment.priority,
        appointment.deadline,
    ];
    const result = yield pool.query(query, values);
    return result.rows[0];
});
exports.create = create;
const update = (appointment) => __awaiter(void 0, void 0, void 0, function* () {
    const entity = (0, exports.get)(appointment.id);
    if (!entity)
        return null;
    const query = "UPDATE Appointments SET sender_id = $1, receiver_id = $2, target_date = $3, location = $4, status = $5, priority = $6, deadline = $7 RETURNING *";
    const values = [
        appointment.sender_id,
        appointment.receiver_id,
        appointment.target_date,
        appointment.location,
        appointment.status,
        appointment.priority,
        appointment.deadline,
    ];
    const result = yield pool.query(query, values);
    return result.rows[0];
});
exports.update = update;
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const entity = yield (0, exports.get)(id);
    console.log(entity);
    if (!entity)
        return null;
    const query = "DELETE FROM Appointments WHERE id = $1";
    return yield pool.query(query, [id]);
});
exports.remove = remove;
