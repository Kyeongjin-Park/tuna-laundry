
const { User } = require('../models');

class UserRepository {
  findAllUser = async () => {
    // ORM인 Sequelize에서 Posts 모델의 findAll 메소드를 사용해 데이터를 요청합니다.
    const user = await user.findAll();
    return user;
  }

  findOneUser = async () => {
    // ORM인 Sequelize에서 Posts 모델의 findAll 메소드를 사용해 데이터를 요청합니다.
    const user = await user.findOne();
    return user;
  }

  createUser = async (nickname, password, confirmPassword, phone, address) => {
    // ORM인 Sequelize에서 Posts 모델의 create 메소드를 사용해 데이터를 요청합니다.
    const createUserData = await User.create({ nickname, password, confirmPassword, phone, address });

    return createUserData;
  }
}

module.exports = UserRepository;