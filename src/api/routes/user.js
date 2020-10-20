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

    router.route('/user/exists/:userName')
        .get(Ctrl.checkUserNameTaken);

    router.route('/user/getByType/:user_admin')
        .get(Ctrl.findAllByType);

    router.route('/user/getAll')
        .get(Ctrl.findAll);

export default router;
