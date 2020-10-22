import express from 'express';
import auth from '../../middlewares/auth';
import Ctrl from '../controllers/clockPoint';

const router = express.Router();
    router.route('/clockPoint')
        .get(Ctrl.findByQuery, auth)
        
        .post(Ctrl.create, auth)

        .put(Ctrl.update, auth)
        
        .delete(Ctrl.delete, auth);

export default router;
