
const { User } = require('../models');

class UserRepository {
  findAllUser = async (nickname) => {
    // ORM인 Sequelize에서 Posts 모델의 findAll 메소드를 사용해 데이터를 요청합니다.
    const allUser = await User.findAll({where: {nickname:nickname}});
    return allUser;
  }

  findOneUser = async (nickname, password) => {
    const oneUser = await User.findOne({where: {nickname:nickname, password:password}});
    return oneUser;
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