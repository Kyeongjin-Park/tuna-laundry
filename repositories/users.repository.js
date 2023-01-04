
const { User } = require('../models');

class UserRepository {
  findAllUser = async () => {
    // ORM인 Sequelize에서 Posts 모델의 findAll 메소드를 사용해 데이터를 요청합니다.
    const user = await User.findAll({where: {nickname}});
    return user;
  }

  findOneUser = async () => {
    
    const user = await User.findOne({ where: { nickname, password } });
    return user;
  }

  createUser = async (nickname, password, phone, address, status, point) => {
    // ORM인 Sequelize에서 Posts 모델의 create 메소드를 사용해 데이터를 요청합니다.
    const createUserData = await User.create({ nickname, password, phone, address, status, point });

    return createUserData;
  }

  updateUser = async (nickname, password, phone, address, status, point) => {
    
    const updateUserData = await User.update({ nickname, password, phone, address, status, point });

    return updateUserData;
  }
}

module.exports = UserRepository;