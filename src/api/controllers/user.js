import Repo from '../repositories/user-dao';
import jwt from 'jsonwebtoken';

class UserCtrl {
    async login (req, res) {
        console.log(req.body);
        const { email, password } = req.body;
        console.log('####################################');
        const user = await Repo.findByEmailAndPassword({ email, password });
        if(user) {
            console.log(`User ${user.name} authenticated`);
            console.log('Authentication Token added to response');
            console.log(user);
            const token = jwt.sign({id: user.id, email: user.email, type: user.type, theme: user.theme, name: user.name, stayLogin: req.body.stayLogin}, process.env.SECRET || 'rolerzinx', {
                expiresIn: 86400 // seconds, 24h
            });
            res.header('x-access-token', token);
            return res.json(token);
        } else {
            console.log(`Authentication failed for user ${req.body.email}`);
            console.log('No token generated');
            res.status(401).json({ message: `Authentication failed for user ${req.body.email}`});  
        }
    }

    async create (req, res) {
        const user = req.body;
        user.createdAt = Date.now();
        user.updatedAt = Date.now();

        const userId = await Repo.create(user);
        if(userId) {
          res.status(204).json(userId);
      } else {
          res.status(404).json({ message: 'Fail'})
      }  
    }

    async update (req, res) {
        const user = req.body;
        user.updatedAt = Date.now();

        const userResp = await Repo.update(user);
        res.status(200).json(userResp);
    }

    async delete (req, res) {
        await Repo.delete(req.query);
        res.status(202).json('delete ok');
    }

    async checkUserNameTaken (req, res) {
        const { user_userName } = req.params;
        const user = await Repo.findByName(user_userName);
        res.json(!!user);
    }

    async findAll (req, res) {
        console.log('####################################');
        console.log(`Finding all users on table user`)
        const users = await Repo.findAll();
        if(users) {
            res.json(users);
        } else {
            res.status(404).json({ message: 'Fail'})
        }  
    }

    async findByQuery (req, res) {
        console.log('####################################');
        console.log(`Finding ${req.query} on table user`);
        const user = await Repo.findByQuery(req.query);
        if(user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'Fail'})
        }  
    }

    async findAllByType (req, res) {
        const { user_admin } = req.params;
        const users = await Repo.findAllByType(user_admin);
        if(users) {
            res.json(users);
        } else {
            res.status(404).json({ message: 'Fail'})
        }  
    }
}
export default new UserCtrl();