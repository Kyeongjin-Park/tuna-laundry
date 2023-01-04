const { User } = require('../models');
const UserRepository = require('../repositories/users.repository');

class UserService {
  userRepository = new UserRepository(User);

  findAllUser = async () => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const allUser = await this.userRepository.findAllUser();

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return  {
        nickname: allUser.nickname,
      };
  }

  findOneUser = async () => {
    
    const oneUser = await this.userRepository.findOneUser();

    return {
        userId: oneUser.userId,
        nickname: oneUser.nickname,
        password: oneUser.password,
        phone: oneUser.phone,
        address: oneUser.address
      };
  }

  createUser = async (nickname, password, phone, address, status, point) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const createUserData = await this.userRepository.createUser(nickname, password, phone, address, status, point);

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return {
      userId: createUserData.null,
      nickname: createUserData.nickname,
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
      userId: updateUserData.null,
      nickname: updateUserData.nickname,
      phone: updateUserData.phone,
      address: updateUserData.address,
      
    };
  }
}

module.exports = UserService;