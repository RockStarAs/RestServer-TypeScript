import express, {Application} from 'express';
import userRoutes from '../routes/usuario.route';
import cors from 'cors';

import db from '../db/conexion';

class Server{

    private app : Application;
    private port : string;
    private apiPaths : { usuarios: '/api/usuarios' };
    constructor(){
        this.app    = express();
        this.port   = process.env.PORT || '8000';
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
    async conectarDb(){
        try{
            await db.authenticate();
            console.log('La base de datos está online');
        }catch(error: any){
            throw new Error(error);
        }
    }
    
    middlewares(){
        // *CORS
        this.app.use(cors());
        // *Lectura del body
        this.app.use(express.json());
        // *Carpeta Pública 
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.apiPaths.usuarios, userRoutes);
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log("Server corriendo en el puerto " + this.port);
        });
    }
};

export default Server;