import Repo from '../repositories/clockPoint-dao';
import jwt from 'jsonwebtoken';

class ClockPointCtrl {
    async create (req, res) {
      let resp;
      try {
        const clockPoint = req.body;
        clockPoint.id_user = jwt.decode(req.headers.authorization).id;
        clockPoint.createdAt = Date.now();
        clockPoint.updatedAt = Date.now();
        resp = await Repo.create(clockPoint);
        if(resp) {
          res.status(204).json(resp);
        } else {
          res.status(404).json({ message: 'Fail'});
        }
      }
      catch(e) {res.status(404).json({ message: e})}  
    }

    async update (req, res) {
        const clockPoint = req.body;
        clockPoint.updatedAt = Date.now();

        const resp = await Repo.update(clockPoint);
        res.status(200).json(resp);
    }

    async delete (req, res) {
        await Repo.delete(req.query);
        res.status(202).json('delete ok');
    }

    async findByQuery (req, res) {
        console.log('####################################');
        console.log(`Finding ${req.query} on clock point`);
        const resp = await Repo.findByQuery( req.query );
        if(resp) {
            res.status(200).json(resp);
        } else {
            res.status(404).json({ message: 'Fail'})
        }  
    }
}
export default new ClockPointCtrl();