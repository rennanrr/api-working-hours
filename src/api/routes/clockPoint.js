import express from 'express';
import Ctrl from '../controllers/clockPoint';

const router = express.Router();
    router.route('/clockPoint')
        .get(Ctrl.findByQuery)
        
        .post(Ctrl.create)

        .put(Ctrl.update)
        
        .delete(Ctrl.delete);

export default router;
