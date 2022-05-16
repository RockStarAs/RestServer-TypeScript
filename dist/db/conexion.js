"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('bd_node', 'root', '', {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    // logging : false,
});
exports.default = db;
//# sourceMappingURL=conexion.js.map