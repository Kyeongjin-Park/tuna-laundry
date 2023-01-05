const { User } = require('../models');
const UserRepository = require('../repositories/users.repository');

class UserService {
  userRepository = new UserRepository();

  findAllUser = async (nickname) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const allUser = await this.userRepository.findAllUser({ where: { nickname } });

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
      return {
        id: allUser.id,
        nickname: allUser.nickname,
        password: allUser.password,
        phone: allUser.phone,
        address: allUser.address,
        status: allUser.status,
        point: allUser.point
      }
    ;

  }

  findOneUser = async (nickname, password) => {
    
    const oneUser = await this.userRepository.findOneUser({ where: { nickname, password } });
      return {
        id: oneUser.id,
        nickname: oneUser.nickname,
        password: oneUser.password,
        phone: oneUser.phone,
        address: oneUser.address,
        status: oneUser.status,
        point: oneUser.point
      }
    ;
  }

  createUser = async (nickname, password, phone, address, status, point) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const createUserData = await this.userRepository.createUser(nickname, password, phone, address, status, point);

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return {
      id: createUserData.id,
      nickname: createUserData.nickname,
      password: createUserData.password,
      phone: createUserData.phone,
      address: createUserData.address,
      status: createUserData.status,
      point: createUserData.point
    };
  }

  updateUser = async ( password, phone, address) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const updateUserData = await this.userRepository.updateUser( password, phone, address);

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return {
      id: updateUserData.id,
      nickname: updateUserData.nickname,
      phone: updateUserData.phone,
      address: updateUserData.address,
      
    };
  }
}

module.exports = UserService;