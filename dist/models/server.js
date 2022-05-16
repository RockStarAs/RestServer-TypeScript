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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_route_1 = __importDefault(require("../routes/usuario.route"));
const cors_1 = __importDefault(require("cors"));
const conexion_1 = __importDefault(require("../db/conexion"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.apiPaths = {
            usuarios: '/api/usuarios'
        };
        //*Conectando a la base de datos
        this.conectarDb();
        //*Llamando a los middlewares
        this.middlewares();
        //*Definir las rutas
        this.routes();
    }
    conectarDb() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield conexion_1.default.authenticate();
                console.log('La base de datos está online');
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    middlewares() {
        // *CORS
        this.app.use((0, cors_1.default)());
        // *Lectura del body
        this.app.use(express_1.default.json());
        // *Carpeta Pública 
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, usuario_route_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Server corriendo en el puerto " + this.port);
        });
    }
}
;
exports.default = Server;
//# sourceMappingURL=server.js.map