import dotenv from 'dotenv';
import Server from './models/server';

//?Configurando dotenv
dotenv.config();
//?Inicializando el server
const server = new Server();
server.listen();