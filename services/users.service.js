const UserRepository = require('../repositories/users.repository');

class UserService {
  userRepository = new UserRepository();

  findAllUser = async () => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const allUser = await this.userRepository.findAllUser();

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return allUser.map(post => {
      return {
        postId: post.postId,
        nickname: post.nickname,
        
      }
    });
  }

  createUser = async (nickname, password, confirmPassword, phone, address) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const createUserData = await this.userRepository.createUser(nickname, password, confirmPassword, phone, address);

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return {
      userId: createUserData.null,
      nickname: createUserData.nickname,
      phone: createUserData.phone,
      address: createUserData.address,
      
    };
  }
}

module.exports = UserService;