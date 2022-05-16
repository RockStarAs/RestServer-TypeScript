import {Router} from 'express';
import { getUsuarios, getUsuario, postUsuarios, actualizarUsuario, deleteUsuario } from '../controllers/usuario.controller';


const router = Router();

router.get('/',     getUsuarios);
router.get('/:id',  getUsuario);
router.post('/',    postUsuarios);
router.put('/:id',  actualizarUsuario);
router.delete('/:id', deleteUsuario);


export default router;

