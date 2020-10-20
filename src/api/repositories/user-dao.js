import Model from '../models/user';

class UserDao {
    async findByEmailAndPassword(query) {
        return Model.findOne({
            where: query,
            raw: true
          });
    }

    async findAll() {
        return Model.findAll({});      
    }

    async findByQuery(query) {
        return Model.findAll({where: query});      
    }

    async findAllByType(admin) {
        return Model.findAll({
            where: {
                admin: admin
            }
        });       
    }

    async create(user) {
      console.log(user);
        return Model.create(user);
    }

    async update(user) {
        return Model.upsert(user, {where: {id:user.id}});
    }
    
    async delete(query) {
        return Model.destroy({where: query});
    }

}

export default new UserDao();