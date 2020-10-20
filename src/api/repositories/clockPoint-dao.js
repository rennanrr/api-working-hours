import Model from '../models/clockPoint';

class ClockPointDao {
    async findByQuery(query) {
        return Model.findAll({where: query});      
    }

    async create(clockPoint) {
        return Model.create(clockPoint);
    }

    async update(clockPoint) {
        return Model.upsert(clockPoint, {where: {id:clockPoint.id}});
    }
    
    async delete(query) {
        return Model.destroy({where: query});
    }
}

export default new ClockPointDao();