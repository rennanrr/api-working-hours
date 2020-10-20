import Repo from '../repositories/clockPoint-dao';

class ClockPointCtrl {
    async create (req, res) {
        const clockPoint = req.body;
        clockPoint.createdAt = Date.now();
        clockPoint.updatedAt = Date.now();

        const resp = await Repo.create(user);
        if(resp) {
          res.status(204).json(resp);
      } else {
          res.status(404).json({ message: 'Fail'})
      }  
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
        const resp = await Repo.findByQuery(req.query);
        if(resp) {
            res.json(resp);
        } else {
            res.status(404).json({ message: 'Fail'})
        }  
    }
}
export default new ClockPointCtrl();