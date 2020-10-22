import express from 'express';
import Ctrl from '../controllers/user';

const router = express.Router();

    router.route('/user/signin')
        .post(Ctrl.login);

    router.route('/user')
        .get(Ctrl.findByQuery)
        
        .post(Ctrl.create)

        .put(Ctrl.update)
        
        .delete(Ctrl.delete);
export default router;
